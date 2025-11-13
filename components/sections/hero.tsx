"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Play, Volume2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Headlines & CTAs */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900">
                Cook without stopping.
                <span className="block text-primary-500 mt-2">
                  TalkNToast guides you step-by-step by voice.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 max-w-xl">
                Paste any recipe—YouTube, TikTok, blogs—and our Voice AI plans, times, and adapts while you cook.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base"
                data-testid="get-early-access-hero-btn"
              >
                Get Early Access
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-base"
                    data-testid="watch-demo-btn"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch 60s Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl" data-testid="demo-video-dialog">
                  <DialogHeader>
                    <DialogTitle>TalkNToast Demo</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video bg-neutral-900 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white space-y-4">
                      <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto">
                        <Play className="w-10 h-10" />
                      </div>
                      <p className="text-lg">Demo Video Placeholder</p>
                      <p className="text-sm text-neutral-400">Voice-guided cooking in action</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Trust Micro */}
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Volume2 className="w-4 h-4 text-primary-500" />
              <span>Works with Alexa, Google Home & smart kitchen devices</span>
            </div>
          </div>

          {/* Right: Demo Video/Mockup */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl shadow-2xl overflow-hidden relative">
              {/* Phone mockup frame */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="bg-neutral-900 p-4 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium">Step 3 of 8</span>
                      <span className="text-xs bg-primary-500 px-2 py-1 rounded-full">5:30</span>
                    </div>
                    <p className="text-lg font-semibold">"Dice the onions into small pieces"</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                          <Volume2 className="w-6 h-6 text-primary-500" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Voice Command</p>
                          <p className="text-xs text-neutral-500">"What's next?"</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 py-3 px-4 bg-primary-50 text-primary-600 rounded-lg text-sm font-medium">
                          Repeat
                        </button>
                        <button className="flex-1 py-3 px-4 bg-neutral-100 text-neutral-700 rounded-lg text-sm font-medium">
                          Skip
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
                <p className="text-xs font-medium text-neutral-600">Timer: 7:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}