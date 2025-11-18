"use client"

import { Youtube, Instagram, TrendingUp, Users, ShoppingCart, Globe } from "lucide-react"

export function WhyPeopleWantThis() {
  const stats = [
    {
      icon: Users,
      stat: "91%",
      description: "of U.S. consumers use online platforms like YouTube, TikTok, Instagram, or Pinterest for recipes",
      source: "Chicory 'State of Online Recipes' 2024 Report",
    },
    {
      icon: TrendingUp,
      stat: "70%",
      description: "of adults now find recipes on social media instead of in cookbooks",
      source: "The Independent",
    },
    {
      icon: Globe,
      stat: "51%",
      description: "of global users rank recipes as their favorite type of social content",
      source: "eMarketer & Snap/IPG Magna Report",
    },
    {
      icon: ShoppingCart,
      stat: "75%",
      description: "of people look for recipes on their phone while grocery shopping",
      source: "Progressive Grocer",
    },
  ]

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist')
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
              Why People Want TalkNToast
            </h2>
            <p className="text-lg md:text-xl text-text-med max-w-3xl mx-auto">
              Cooking has gone social — people aren't reading cookbooks anymore, they're scrolling them.
            </p>
          </div>

          {/* Visual Mockup Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Left: Social Media Platforms */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-text-purple uppercase tracking-wide mb-6">
                Where people find recipes today
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-bg-elev1 rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center space-y-3 hover:border-primary/50 transition-all">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                    <Youtube className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-text-high font-medium">YouTube</span>
                </div>
                <div className="bg-bg-elev1 rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center space-y-3 hover:border-primary/50 transition-all">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-text-high font-medium">Instagram</span>
                </div>
                <div className="bg-bg-elev1 rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center space-y-3 hover:border-primary/50 transition-all">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <span className="text-text-high font-medium">TikTok</span>
                </div>
                <div className="bg-bg-elev1 rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center space-y-3 hover:border-primary/50 transition-all">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">P</span>
                  </div>
                  <span className="text-text-high font-medium">Pinterest</span>
                </div>
              </div>
            </div>

            {/* Right: TalkNToast Interface */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-text-purple uppercase tracking-wide mb-6">
                How TalkNToast helps
              </p>
              <div className="bg-gradient-to-br from-primary-900/30 to-primary-800/20 rounded-2xl p-8 border border-primary/30 shadow-glow">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-text-high">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📱</span>
                    </div>
                    <span className="font-medium">Paste any recipe link</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-high">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">✨</span>
                    </div>
                    <span className="font-medium">AI structures the steps</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-high">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🎙️</span>
                    </div>
                    <span className="font-medium">Voice guides you hands-free</span>
                  </div>
                  <div className="mt-6 pt-6 border-t border-primary/20">
                    <p className="text-sm text-text-med">
                      Turn social recipes into<br />
                      <span className="text-primary font-semibold">hands-free cooking experiences</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Body Copy with Stats */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-base md:text-lg text-text-med leading-relaxed mb-6">
                Millions of people already learn to cook from social media — not from traditional recipe books. 
                Platforms like YouTube, TikTok, and Instagram have become the new kitchens where trends are born, 
                meals are discovered, and people cook along in real time.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-6 my-12">
              {stats.map((item, index) => {
                const Icon = item.icon
                return (
                  <div 
                    key={index}
                    className="bg-bg-elev1 rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all"
                    data-testid={`stat-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                        <p className="text-sm text-text-med leading-relaxed mb-2">
                          {item.description}
                        </p>
                        <p className="text-xs text-text-low italic">
                          → {item.source}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Additional Context */}
            <div className="prose prose-invert max-w-none">
              <p className="text-base md:text-lg text-text-med leading-relaxed">
                Social media has changed how people cook — they're exploring new cuisines, learning healthy habits, 
                and finding quick visual inspiration online. Digital recipes generate billions of views every month, 
                and 60% say they're using these platforms more than last year.
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="max-w-3xl mx-auto mb-12">
            <blockquote className="relative">
              <div className="bg-gradient-to-br from-primary-900/20 to-primary-800/10 rounded-2xl p-8 md:p-12 border border-primary/30">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl text-white">
                  "
                </div>
                <p className="text-xl md:text-2xl font-semibold text-text-high text-center leading-relaxed">
                  People aren't just watching food videos — they're cooking along with them.
                </p>
              </div>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={scrollToWaitlist}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-glow hover:shadow-glow-lg"
              data-testid="why-section-cta"
            >
              <span>🧑‍🍳</span>
              <span>Join the waitlist to turn your favorite food videos into real-life meals</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
