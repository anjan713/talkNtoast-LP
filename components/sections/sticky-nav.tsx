"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import { X } from "lucide-react"

export function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-bg-base/80 border-b border-border' 
          : 'bg-transparent'
      }`}
      data-testid="sticky-nav"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Wordmark */}
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl md:text-2xl font-bold text-text-high hover:text-primary transition-colors"
              data-testid="logo-link"
            >
              TalkNToast
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6 md:gap-8">
            <Dialog>
              <DialogTrigger asChild>
                <button 
                  className="text-sm md:text-base text-text-med hover:text-text-high transition-colors"
                  data-testid="nav-watch-demo"
                >
                  Watch demo
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-bg-elev2 border-border" data-testid="demo-modal">
                <DialogHeader>
                  <DialogTitle className="text-text-high">See TalkNToast in action</DialogTitle>
                </DialogHeader>
                <AspectRatio.Root ratio={16 / 9}>
                  <iframe
                    src="https://www.youtube.com/embed/YRBOi8Sd8C0?si=3w9hKpkuuqtEr3SE"
                    title="TalkNToast Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  />
                </AspectRatio.Root>
              </DialogContent>
            </Dialog>

            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm md:text-base text-text-med hover:text-text-high transition-colors hidden sm:block"
              data-testid="nav-how-it-works"
            >
              How it works
            </button>

            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm md:text-base text-text-med hover:text-text-high transition-colors hidden sm:block"
              data-testid="nav-features"
            >
              Features
            </button>

            <button 
              onClick={() => scrollToSection('waitlist')}
              className="text-sm md:text-base text-text-med hover:text-text-high transition-colors"
              data-testid="nav-join-waitlist"
            >
              Join waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}