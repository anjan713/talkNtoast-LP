"use client"

import { Mic2, Timer, Link, Brain, Speaker } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Mic2,
      title: "Ask ‘What’s next?’ anytime",
      description: "Voice-guided prompts keep you in the flow without touching your device.",
    },
    {
      icon: Timer,
      title: "Smart timers that talk to you",
      description: "Automatic timing for each step with voice notifications.",
    },
    {
      icon: Link,
      title: "Paste from anywhere",
      description: "YouTube, TikTok, or blogs — works with any recipe source.",
    },
    {
      icon: Brain,
      title: "Adapts if you skip or repeat",
      description: "Intelligent flow that adjusts to your cooking pace.",
    },
    {
      icon: Speaker,
      title: "Works on smart speakers",
      description: "Run our voice AI on Alexa, Google Home, and other smart speakers.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-bg-elev1" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-high mb-3">
              Key Features
            </h2>
          </div>

          {/* Features 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index}
                  className="bg-bg-base rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/50 transition-all hover:shadow-glow"
                  data-testid={`feature-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-semibold text-text-high leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-text-med leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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