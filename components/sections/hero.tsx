"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import { Clock, Mic } from "lucide-react"

export function Hero() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-dark pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-bg-base opacity-60" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Headlines & CTAs */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.05] text-text-high">
                Cook without stopping.
                <span className="block mt-2">
                  TalkNToast guides you by voice.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-text-med max-w-xl leading-relaxed">
                Paste any recipe — YouTube, TikTok, or blogs — and get hands-free, step-by-step voice guidance.
              </p>
            </div>

            {/* Text Links as CTAs */}
            <div className="flex items-center gap-6 text-base md:text-lg">
              <Dialog>
                <DialogTrigger asChild>
                  <button 
                    className="text-text-high hover:text-primary transition-colors underline underline-offset-4 decoration-text-low hover:decoration-primary"
                    data-testid="hero-watch-demo"
                  >
                    Watch demo
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-bg-elev2 border-border" data-testid="hero-demo-modal">
                  <DialogHeader>
                    <DialogTitle className="text-text-high">See TalkNToast in action</DialogTitle>
                  </DialogHeader>
                  <AspectRatio.Root ratio={16 / 9}>
                    <iframe
                      src="https://www.youtube.com/embed/HFbdLGTi0r4?si=sKdn0aHjxrfbKdhB"
                      title="TalkNToast Demo Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    />
                  </AspectRatio.Root>
                </DialogContent>
              </Dialog>

              <span className="text-text-low">·</span>

              <button 
                onClick={scrollToWaitlist}
                className="text-text-high hover:text-primary transition-colors underline underline-offset-4 decoration-text-low hover:decoration-primary"
                data-testid="hero-join-waitlist"
              >
                Join waitlist
              </button>
            </div>
          </div>

          {/* Right: Static UI Card Mock */}
          <div className="relative">
            <div className="bg-bg-elev1 rounded-[20px] shadow-glow-lg border border-border/50 overflow-hidden max-w-md mx-auto">
              {/* Step Card Header */}
              <div className="bg-gradient-to-r from-primary-700 to-primary-600 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-white/90">Step 3 of 8</span>
                  <div className="flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-white" />
                    <span className="text-sm font-semibold text-white">5:30</span>
                  </div>
                </div>
                <p className="text-xl font-semibold text-white leading-snug">
                  Dice the onions into small pieces
                </p>
              </div>

              {/* Step Card Body */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mic className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm font-medium text-text-high">Voice Command</p>
                      <p className="text-sm text-text-purple mt-1">"What's next?"</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 py-3 px-4 bg-primary/10 text-primary rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors">
                      Repeat
                    </button>
                    <button className="flex-1 py-3 px-4 bg-bg-elev2 text-text-med rounded-xl text-sm font-medium hover:bg-bg-base transition-colors">
                      Skip
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}