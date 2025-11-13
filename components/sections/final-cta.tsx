"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail } from "lucide-react"

export function FinalCTA() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success! 🎉",
        description: "You're on the list! We'll invite you in batches by region & device.",
      })
      setEmail("")
      setLoading(false)
    }, 1000)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-500 to-primary-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Cook with confidence. Go hands-free today.
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8">
            Join thousands of home cooks transforming their kitchen experience
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto" data-testid="final-cta-form">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-final" className="sr-only">
                  Email address
                </Label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <Input
                      id="email-final"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 bg-white text-neutral-900 h-14"
                      data-testid="email-input-final"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="bg-white text-primary-600 hover:bg-neutral-100 h-14 px-8"
                    data-testid="get-early-access-final-btn"
                  >
                    {loading ? "Submitting..." : "Get Early Access"}
                  </Button>
                </div>
              </div>
              <p className="text-sm text-primary-100">
                We'll invite in batches by region & device. No spam, ever.
              </p>
            </div>
          </form>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Beta launching Q1 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Free during beta</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}