import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function ProblemPromise() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Problem */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Cooking from social media is messy.
            </h2>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-neutral-600">You pause with messy knuckles, rewind, and rewatch.</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-neutral-600">Hands are covered, timing gets off, ingredients run out.</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-neutral-600">Text instructions aren't built for real kitchens.</p>
              </div>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Promise */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Solution</span>
            </div>
            <p className="text-xl md:text-2xl text-neutral-900 font-medium leading-relaxed">
              TalkNToast turns any recipe into a hands-free, voice-guided experience that adapts as you cook.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}