import { Card } from "@/components/ui/card"
import { Users, Database, Radio, Sparkles } from "lucide-react"

export function VisionEcosystem() {
  const visionPoints = [
    {
      icon: Users,
      title: "Creators",
      description: "Bring audiences, keep content updated, monetize directly through recipe shares.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Database,
      title: "Training data (with permission)",
      description: "Real cooking interactions train in-house AI to better understand kitchen workflows.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Radio,
      title: "SmartChef integrations",
      description: "Hands-free guidance across speakers, smart ovens, displays, and IoT devices.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Sparkles,
      title: "Future",
      description: "License to kitchen robots, QSRs, remote/highway kitchens, and commercial operations.",
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              An ecosystem where tech, creativity, and real kitchens meet
            </h2>
            <p className="text-lg text-neutral-600">
              Building the future of cooking, one voice command at a time
            </p>
          </div>

          <div className="space-y-6">
            {visionPoints.map((point, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6 p-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${point.color}`}>
                    <point.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-neutral-600">
                      {point.description}
                    </p>
                  </div>
                  {index < visionPoints.length - 1 && (
                    <div className="hidden lg:block w-px h-full bg-primary-200 absolute right-0" />
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white p-8">
              <h3 className="text-2xl font-bold mb-2">Partner with us</h3>
              <p className="mb-4 opacity-90">Join the cooking revolution</p>
              <a href="#contact" className="inline-flex items-center text-white underline hover:no-underline">
                Get in touch →
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}