"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

   
export function TypewriterEffect() {
  const words = [
    {
      text: "Your",
    },
    {
      text: "Personal",
    },
    {
      text: "AI",
      className: 'text-bold' 
    },
    {
      text: "Study",
    },
    {
      text: "Assistant .",
      className: "text-blue-500 text-5xl dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
