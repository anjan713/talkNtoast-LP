import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Video, HeartPulse, Home, Brain } from "lucide-react"

export function VisionRoadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Consumers",
      description: "Voice-AI cooking assistant + grocery integration",
      icon: User,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-500",
    },
    {
      phase: "Phase 2",
      title: "Creators",
      description: "Subscriptions, paid recipes, live classes",
      icon: Video,
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      borderColor: "border-orange-500",
    },
    {
      phase: "Phase 3",
      title: "Nutritionists",
      description: "Recipe tracking for patients & health data integration",
      icon: HeartPulse,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      borderColor: "border-green-500",
    },
    {
      phase: "Phase 4",
      title: "Smart Kitchen",
      description: "IoT partnerships to control appliances via voice",
      icon: Home,
      color: "bg-teal-500",
      lightColor: "bg-teal-50",
      borderColor: "border-teal-500",
    },
    {
      phase: "Phase 5",
      title: "AI Platform",
      description: "Proprietary cooking ML model licensed to restaurants & robots",
      icon: Brain,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      borderColor: "border-purple-500",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
              Where TalkNToast is Headed
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              From the kitchen in your pocket to the kitchens of the future.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 opacity-20 hidden md:block" />

            {/* Phase cards */}
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className="relative"
                  data-testid={`vision-phase-${index + 1}`}
                >
                  <Card className={`bg-white border-l-4 ${phase.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                    <div className="flex items-start gap-6 p-6 md:p-8">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${phase.color} shadow-md`}>
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${phase.lightColor} ${phase.color.replace('bg-', 'text-')}`}>
                            {phase.phase}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                          {phase.title}
                        </h3>
                        <p className="text-neutral-600 text-lg leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Connection dot for timeline */}
                  <div className={`hidden md:block absolute left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${phase.color} border-4 border-white shadow-md z-10`} />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Card className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Be part of the journey
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Join early access and help shape the future of cooking
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-600 hover:bg-neutral-100 font-semibold px-8 py-6 text-lg"
                data-testid="vision-early-access-btn"
              >
                Join Early Access →
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
