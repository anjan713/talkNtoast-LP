"use client"

import { Link2, Sparkles, Mic } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Link2,
      title: "Paste a recipe link",
      description: "YouTube, TikTok, or blogs",
    },
    {
      icon: Sparkles,
      title: "AI turns it into steps",
      description: "Clear, structured",
    },
    {
      icon: Mic,
      title: "Voice guides you",
      description: "Say “What’s next?” hands-free",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-bg-base" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-high mb-3">
              How It Works
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center space-y-4"
                  data-testid={`how-it-works-step-${index}`}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center shadow-glow">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-text-high">
                      {step.title}
                    </h3>
                    <p className="text-base text-text-med max-w-[28ch]">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}