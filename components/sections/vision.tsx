"use client"

import { Users, Sparkles, HeartPulse, Cpu, Brain } from "lucide-react"

export function Vision() {
  const phases = [
    {
      number: 1,
      icon: Users,
      color: "blue",
      colorClasses: {
        accent: "from-blue-500 to-blue-700",
        glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
        border: "border-blue-500/30",
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-400",
      },
      title: "Cooking That Listens",
      description: "Launch TalkNToast as the first voice-AI recipe assistant that turns any video into a step-by-step, hands-free cooking experience.",
      tagline: "Make cooking interactive, not instructional.",
    },
    {
      number: 2,
      icon: Sparkles,
      color: "orange",
      colorClasses: {
        accent: "from-orange-500 to-orange-700",
        glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
        border: "border-orange-500/30",
        iconBg: "bg-orange-500/20",
        iconColor: "text-orange-400",
      },
      title: "Empowering Food Creators",
      description: "Allow creators to upload their content, sell premium recipes, and host group or one-on-one cooking classes directly on the platform.",
      tagline: "Turn every recipe into a business.",
    },
    {
      number: 3,
      icon: HeartPulse,
      color: "green",
      colorClasses: {
        accent: "from-green-500 to-green-700",
        glow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]",
        border: "border-green-500/30",
        iconBg: "bg-green-500/20",
        iconColor: "text-green-400",
      },
      title: "Health Meets Taste",
      description: "Onboard nutritionists to craft customized diet plans, share recipes with patients, and track adherence through integrated analytics.",
      tagline: "Personalized nutrition, powered by AI.",
    },
    {
      number: 4,
      icon: Cpu,
      color: "teal",
      colorClasses: {
        accent: "from-teal-500 to-teal-700",
        glow: "shadow-[0_0_30px_rgba(20,184,166,0.3)]",
        border: "border-teal-500/30",
        iconBg: "bg-teal-500/20",
        iconColor: "text-teal-400",
      },
      title: "The Connected Kitchen",
      description: "Integrate with IoT devices (ovens, cooktops, scales, and smart fridges) for seamless voice control and automated cooking workflows.",
      tagline: "Your kitchen, orchestrated by AI.",
    },
    {
      number: 5,
      icon: Brain,
      color: "purple",
      colorClasses: {
        accent: "from-purple-500 to-purple-700",
        glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
        border: "border-purple-500/30",
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-400",
      },
      title: "Intelligence That Cooks",
      description: "Build and license TalkNToast's proprietary multimodal ML cooking model to restaurants, kitchen robots, and food-tech startups.",
      tagline: "From your kitchen to the world's.",
    },
  ]

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="vision"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%)"
      }}
    >
      {/* Ambient glow effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Where TalkNToast is Headed
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              From the kitchen in your pocket to the kitchens of the future.
            </p>
          </div>

          {/* Vision Cards with Timeline */}
          <div className="relative">
            {/* Timeline connector line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/30 to-purple-500/20" 
                 aria-hidden="true" 
            />

            {/* Phase Cards */}
            <div className="space-y-8 md:space-y-12">
              {phases.map((phase, index) => {
                const Icon = phase.icon
                return (
                  <div
                    key={index}
                    className="relative pl-20 md:pl-28 group"
                    data-testid={`vision-phase-${phase.number}`}
                  >
                    {/* Phase number indicator */}
                    <div className={`absolute left-0 md:left-4 top-0 w-16 h-16 rounded-full bg-gradient-to-br ${phase.colorClasses.accent} flex items-center justify-center font-bold text-2xl text-white ${phase.colorClasses.glow}`}>
                      {phase.number}
                    </div>

                    {/* Card */}
                    <div 
                      className={`bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border ${phase.colorClasses.border} ${phase.colorClasses.glow} hover:scale-[1.02] transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl ${phase.colorClasses.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-7 h-7 ${phase.colorClasses.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {phase.title}
                          </h3>
                          <p className={`text-sm font-medium ${phase.colorClasses.iconColor} uppercase tracking-wide`}>
                            Phase {phase.number}
                          </p>
                        </div>
                      </div>

                      <p className="text-base md:text-lg text-white/80 leading-relaxed mb-4">
                        {phase.description}
                      </p>

                      <div className={`inline-flex items-center gap-2 text-sm font-semibold ${phase.colorClasses.iconColor} bg-white/5 px-4 py-2 rounded-full border ${phase.colorClasses.border}`}>
                        <span>→</span>
                        <span>{phase.tagline}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Closing CTA */}
          <div className="text-center mt-16 md:mt-20">
            <button
              onClick={scrollToWaitlist}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-deep hover:from-primary-hover hover:to-primary text-white font-bold text-lg px-10 py-5 rounded-xl transition-all shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] hover:scale-105"
              data-testid="vision-cta"
            >
              <span>🚀</span>
              <span>Join the Waitlist — Build the Future of Cooking With Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
