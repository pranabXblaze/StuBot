import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
// import { Brain, Send, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import {v4} from 'uuid'

const API_key = import.meta.env.VITE_API_KEY
console.log(API_key)

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface Input {
  input : string;
  sender : 'user';
  timestamp : Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  // const [data , setData] = useState('');
  const { logout } = useAuth();
  const navigate = useNavigate();
  
 // const channelToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const channelToken = v4();
  
  const handleSend = () => {
    if (!(input).trim()) return;

    
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Apikey: `Api-Key ${API_key} `
      },
      body: JSON.stringify({
        payload: input,
      })
    };

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    const skeletonMessageId = (Date.now() + 1).toString();
  const skeletonMessage: Message = {
    id: skeletonMessageId,
    content: 'Processing...',
    sender: 'bot',
    timestamp: new Date(),
  };
  setMessages((prev) => [...prev, skeletonMessage]);
    
    fetch(`https://payload.vextapp.com/hook/NBD4YMHI4T/catch/${channelToken}`, options)
      .then(res => res.json())
      .then(res => {
        console.log("API Response:", res);
        let botContent = '';
        if(typeof res.text === 'string') {
          botContent = res.text;
        } else if(typeof res.text === 'object') {
          //object to string
          botContent = JSON.stringify(res.text);
        }else {
          console.error("Invalid response format:", res);
          botContent = 'Error: Invalid response from server';       
         }
         // Update skeleton message with actual response
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === skeletonMessageId ? { ...msg, content: botContent } : msg
        )
      );
         
       })
      .catch(err => {
      console.error("Fetch error:", err);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === skeletonMessageId
            ? { ...msg, content: 'Error: Unable to fetch data' }
            : msg
        )
      );
    });
      
    }

          
    
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];


  return (
    <div className="flex h-[100dvh] flex-col md:flex-row">
      {/* Sidebar - Hidden on mobile by default */}
      <div className="hidden border-r bg-muted md:flex md:w-64 md:flex-col">
        <div className="flex h-16 items-center px-4">
          {/* <Brain className="h-6 w-6" /> */}
          <span className="ml-2 text-xl font-bold">StuBot</span>
        </div>
        <div className="flex flex-col space-y-2 p-4">
          <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
            {/* <LogOut className="mr-2 h-4 w-4" /> */}
            Logout
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            {/* <Settings className="mr-2 h-4 w-4" /> */}
            Settings
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex h-16 items-center justify-between border-b px-4 md:hidden">
        <div className="flex items-center">
          {/* <Brain className="h-6 w-6" /> */}
          <span className="ml-2 text-xl font-bold">StuBot</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            {/* <LogOut className="h-5 w-5" /> */}
          </Button>
          <Button variant="ghost" size="icon">
            {/* <Settings className="h-5 w-5" /> */}
          </Button>
        </div>
      </div>    

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col">
        {/*  Header  */ }
        <div className ={`${(messages.length>0)? 'hidden' : ''}z-10 fixed lg:ml-[540px] ml-[250px] top-48 mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black `} >
        Ask StuBot Anything!
       </div>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[85%] sm:max-w-[75%] ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <p className="break-words whitespace-pre-wrap">{message.content}</p>
                  <span className="text-xs opacity-50">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t p-4 h-[50px] lg:h-1/6">
          <div className="flex space-x-2 lg:space-x-4 items-center justify-center">
            
           <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(e) => setInput(e.target.value)}
        onSubmit={() => handleSend()}
              />
            <Button onClick={handleSend}>
              {/* <Send className="h-4 w-4" /> */}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

