"use client"

import { Mic, UtensilsCrossed, Bot, Video } from "lucide-react"

export function MarketSnapshot() {
  const markets = [
    {
      icon: Mic,
      title: "Voice-AI Market",
      stat: "$33.7B by 2030",
      hoverDetail: "Global voice assistant market growing at 26.5% CAGR",
      fullDetail: "Voice-driven interfaces are becoming the default across homes, cars, and kitchens — positioning TalkNToast as a natural extension.",
      anchor: "faq-voice-assistant-market",
      emoji: "🗣️",
    },
    {
      icon: UtensilsCrossed,
      title: "Smart Kitchen Market",
      stat: "$37.2B by 2030",
      hoverDetail: "IoT kitchen devices market growing 11.3% CAGR",
      fullDetail: "AI and IoT-enabled appliances are creating connected kitchens where TalkNToast becomes the voice layer.",
      anchor: "faq-smart-kitchen-market",
      emoji: "🍳",
    },
    {
      icon: Bot,
      title: "AI Cooking & Automation",
      stat: "$11.6B by 2034",
      hoverDetail: "AI-enabled kitchen appliances market 30.5% CAGR",
      fullDetail: "The rise of smart cooking and food robots opens long-term licensing potential for our proprietary models.",
      anchor: "faq-ai-kitchen-market",
      emoji: "🤖",
    },
    {
      icon: Video,
      title: "Creator & Recipe Economy",
      stat: "$250B+ creator economy",
      hoverDetail: "Food creators dominate video engagement — 51% of social users watch cooking content",
      fullDetail: "As video-based cooking scales, TalkNToast helps creators monetize beyond content views.",
      anchor: "faq-creator-economy",
      emoji: "🎥",
    },
  ]

  const scrollToFAQ = (anchor: string) => {
    const element = document.getElementById(anchor)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 md:py-28 bg-bg-base">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-high mb-4">
              Market Snapshot
            </h2>
            <p className="text-base md:text-lg text-text-med max-w-3xl mx-auto leading-relaxed">
              TalkNToast sits at the intersection of three fast-growing industries — from voice assistants to smart kitchens and creator-driven food tech.
              <span className="block mt-2 text-text-purple">Hover or tap to explore the opportunity.</span>
            </p>
          </div>

          {/* Market Cards - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {markets.map((market, index) => {
              const Icon = market.icon
              return (
                <button
                  key={index}
                  onClick={() => scrollToFAQ(market.anchor)}
                  className="group relative bg-bg-elev1 rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/50 transition-all hover:shadow-glow hover:scale-[1.02] text-left cursor-pointer"
                  data-testid={`market-card-${index}`}
                >
                  {/* Icon & Emoji */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-3xl">{market.emoji}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-text-high mb-3">
                    {market.title}
                  </h3>

                  {/* Stat */}
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-3">
                    {market.stat}
                  </div>

                  {/* Hover Detail - Always visible on mobile, hover on desktop */}
                  <p className="text-sm md:text-base text-text-med leading-relaxed mb-3">
                    {market.hoverDetail}
                  </p>

                  {/* Full Detail - Hidden on mobile, visible on hover on desktop */}
                  <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-text-low leading-relaxed italic border-t border-border/30 pt-3">
                      {market.fullDetail}
                    </p>
                  </div>

                  {/* Click indicator */}
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mt-4 group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </button>
              )
            })}
          </div>

          {/* Bottom note */}
          <div className="text-center mt-12">
            <p className="text-sm text-text-low">
              Click any card to view detailed market insights and sources
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
