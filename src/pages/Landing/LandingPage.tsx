import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
// import { GraduationCap, MessageSquare, Sparkles, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';
import {FeaturesSectionDemo} from '@/components/features-section-demo-3';
import { TypewriterEffect } from '@/components/typewriter';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen lg:w-full w-full flex flex-col bg-background">
      {/* Responsive Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 md:h-16 items-center px-4">
          <div className="flex items-end space-x-2">
            {/* <Brain className="h-5 w-5 md:h-6 md:w-6" /> */}
            <span className="text-lg md:text-xl font-bold">StuBot</span>
          </div>
          <div className="ml-auto flex items-end space-x-2 md:space-x-4">
            <Button variant="ghost" className="text-sm md:text-base" onClick={() => navigate('/auth')}>
              Login
            </Button>
            <Button className="text-sm md:text-base bg-blue-500" onClick={() => navigate('/auth?tab=register')}>
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <TypewriterEffect />
                  <p className="max-w-[600px] mx-8 text-base md:text-2xl text-muted-foreground">
                    Get instant help with your studies, 24/7. From homework assistance to exam prep,
                    we've got you covered.
                  </p>
                </div>
                <div className="flex flex-col mx-8 sm:flex-row gap-2">
                  <Button size="lg" className="bg-blue-500" onClick={() => navigate('/auth')}>
                    {/* Get Started <ArrowRight className="ml-2 h-4 w-4" /> */}
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="chat-animation space-y-4">
                  <div className="flex items-start gap-4 rounded-lg bg-muted p-4">
                    <div className="h-8 w-8 rounded-full bg-primary" />
                    <div className="space-y-2">
                      <div className="h-4 w-48 rounded bg-primary/20" />
                      <div className="h-4 w-72 rounded bg-primary/20" />
                    </div>
                  </div>
                  <div className="ml-auto flex items-start gap-4 rounded-lg bg-primary p-4 text-primary-foreground">
                    <div className="space-y-2">
                      <div className="h-4 w-64 rounded bg-primary-foreground/20" />
                      <div className="h-4 w-48 rounded bg-primary-foreground/20" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary-foreground/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t bg-muted py-12 md:py-20">
          <div className=" px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center p-4">
                {/* <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-primary" /> */}
                <h3 className="text-lg md:text-xl font-bold">Smart Learning</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Personalized learning experience tailored to your needs
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-4">
                {/* <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-primary" /> */}
                <h3 className="text-lg md:text-xl font-bold">24/7 Support</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Get help anytime, anywhere with our AI assistant
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-4">
                {/* <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-primary" /> */}
                <h3 className="text-lg md:text-xl font-bold">Instant Answers</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Quick and accurate responses to your academic questions
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
      {/* 
        <section className="py-12 md:py-20">
          <div className="px-4 md:px-6">
            <FeaturesSectionDemo />
          </div>         
        </section> */}

       

       {/* Testimonials Section */}
        <section className="border-t bg-muted py-12 md:py-20">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                What Our Students Say
              </h2>
              <p className="max-w-[700px] text-sm md:text-base text-muted-foreground">
                Don't just take our word for it. Here's what students have to say about their
                experience with StudyAI.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-4 md:gap-6 py-8 md:py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border bg-card p-4 md:p-6">
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground">
                    "StuBot helped me improve my grades significantly. The instant help and
                    detailed explanations are incredible!"
                  </p>
                  <div className="flex items-center space-x-1 text-primary">
                    {/* {[...Array(5)].map((_, i) => (
                      // <CheckCircle2 key={i} className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                    ))} */}
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <p className="font-semibold text-sm md:text-base">Sarah Johnson</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Computer Science Student</p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-card p-4 md:p-6">
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground">
                    "The 24/7 availability is a game-changer. I can get help whenever I need it,
                    even late at night before exams."
                  </p>
                  <div className="flex items-center space-x-1 text-primary">
                    {/* {[...Array(5)].map((_, i) => (
                      // <CheckCircle2 key={i} className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                    ))} */}
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <p className="font-semibold text-sm md:text-base">Michael Chen</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Engineering Student</p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-card p-4 md:p-6">
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground">
                    "The personalized learning experience is amazing. It's like having a private
                    tutor available anytime!"
                  </p>
                  <div className="flex items-center space-x-1 text-primary">
                    {/* {[...Array(5)].map((_, i) => (
                      // <CheckCircle2 key={i} className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                    ))} */}
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <p className="font-semibold text-sm md:text-base">Emily Rodriguez</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Biology Student</p>
                </div>
              </div>
            </div>
          </div>
        </section>  

        {/* CTA Section */}
        <section className="py-12 md:py-20">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Ready to Transform Your Learning?
              </h2>
              <p className="max-w-[600px] text-sm md:text-base text-muted-foreground">
                Join thousands of students who are already experiencing the future of learning.
                Start your journey today!
              </p>
              <Button size="lg" className='bg-blue-500' onClick={() => navigate('/auth')}>
                {/* Get Started Now <ArrowRight className="ml-2 h-4 w-4" /> */}
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6">
        <div className="flex flex-col items-center gap-4 px-4 md:px-6">
          <div className="flex items-center space-x-2">
            
            <span className="text-lg md:text-xl font-bold">StuBot</span>
          </div>
          <p className="text-center text-xs md:text-sm text-muted-foreground">
            © 2025 StuBot. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
