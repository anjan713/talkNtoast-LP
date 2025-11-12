import { Link2, MessageCircle, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HowItWorks() {
  const steps = [
    {
      icon: Link2,
      title: "Drop a link or paste text",
      description: "YouTube, TikTok, Instagram, or any recipe blog. Just paste and we'll do the rest.",
      badges: ["YouTube", "TikTok", "Instagram", "Blogs"],
    },
    {
      icon: MessageCircle,
      title: "Talk to cook",
      description: '"What\'s next?", "Set a 7-minute timer," "Do I dice or slice?" — just ask naturally.',
      badges: ["Hands-free", "Voice Commands"],
    },
    {
      icon: CheckCircle,
      title: "Finish smarter",
      description: "Auto-timers, substitutions, portioning, and grocery lists—all managed for you.",
      badges: ["Smart Timers", "Substitutions", "Lists"],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Three simple steps from recipe link to finished dish
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`how-it-works-step-${index + 1}`}>
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                {index + 1}
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200 h-full">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary-500" />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {step.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {step.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}