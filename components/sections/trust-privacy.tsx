import { Shield, AlertTriangle, Accessibility } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function TrustPrivacy() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Built with trust, safety, and accessibility in mind
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Privacy */}
            <Card className="p-6 border-2 hover:border-primary-200 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Privacy First</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Consent for link ingestion</li>
                <li>• Creator terms respected</li>
                <li>• Opt-out of AI training</li>
                <li>• No data selling</li>
                <li>• GDPR & CCPA compliant</li>
              </ul>
            </Card>

            {/* Kitchen Safety */}
            <Card className="p-6 border-2 hover:border-primary-200 transition-colors">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Kitchen Safety</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Voice confirmations on heat</li>
                <li>• Automatic safety timers</li>
                <li>• Allergy alerts</li>
                <li>• Temperature warnings</li>
                <li>• Emergency pause commands</li>
              </ul>
            </Card>

            {/* Accessibility */}
            <Card className="p-6 border-2 hover:border-primary-200 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Accessibility className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Accessibility</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Fully keyboard navigable</li>
                <li>• Large touch targets</li>
                <li>• ARIA labels throughout</li>
                <li>• Voice captions available</li>
                <li>• Screen reader optimized</li>
              </ul>
            </Card>
          </div>

          <Separator className="my-12" />

          <div className="text-center space-y-4">
            <p className="text-sm text-neutral-600">
              <strong>Your data, your control.</strong> We believe in transparent practices and user empowerment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#privacy" className="text-primary-500 hover:underline">Privacy Policy</a>
              <span className="text-neutral-300">•</span>
              <a href="#terms" className="text-primary-500 hover:underline">Terms of Service</a>
              <span className="text-neutral-300">•</span>
              <a href="#accessibility" className="text-primary-500 hover:underline">Accessibility Statement</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}