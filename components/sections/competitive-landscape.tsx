import { Check, X } from "lucide-react"

export function CompetitiveLandscape() {
  const competitors = [
    { name: "TalkNToast", color: "bg-primary-500" },
    { name: "Recipe Apps (Yummly, SideChef)", color: "bg-neutral-300" },
    { name: "Voice Assistants (Alexa/Google)", color: "bg-neutral-300" },
  ]

  const features = [
    { 
      name: "Hands-free voice guidance", 
      values: [true, false, true] 
    },
    { 
      name: "Social media recipe ingestion", 
      values: [true, false, false] 
    },
    { 
      name: "Multi-step timers & orchestration", 
      values: [true, false, false] 
    },
    { 
      name: "Smart inventory tracking", 
      values: [true, true, false] 
    },
    { 
      name: "Meal planning", 
      values: [true, true, false] 
    },
    { 
      name: "Smart device integration", 
      values: [true, false, true] 
    },
    { 
      name: "Licensing/SDK available", 
      values: [true, false, false] 
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              More than a recipe app. Smarter than a general assistant.
            </h2>
            <p className="text-lg text-neutral-600">
              See how TalkNToast compares to traditional solutions
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b-2 border-neutral-200 font-semibold text-neutral-900">
                    Feature
                  </th>
                  {competitors.map((competitor, index) => (
                    <th key={index} className="text-center p-4 border-b-2 border-neutral-200">
                      <div className="flex flex-col items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${competitor.color}`} />
                        <span className="text-sm font-semibold text-neutral-900">
                          {competitor.name}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, featureIndex) => (
                  <tr key={featureIndex} className="hover:bg-neutral-50">
                    <td className="p-4 border-b border-neutral-100 text-neutral-700">
                      {feature.name}
                    </td>
                    {feature.values.map((value, valueIndex) => (
                      <td key={valueIndex} className="p-4 border-b border-neutral-100 text-center">
                        {value ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-neutral-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Recipe Apps</h3>
              <p className="text-sm text-neutral-600">Great catalogs; mostly text-based. Don't guide hands-free.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Voice Assistants</h3>
              <p className="text-sm text-neutral-600">Quick answers; not built for social recipes or full cooking flows.</p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <h3 className="font-semibold text-primary-700 mb-2">TalkNToast</h3>
              <p className="text-sm text-neutral-700">Voice-guided + social ingestion + planning + inventory in one.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}