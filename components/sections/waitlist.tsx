"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function Waitlist() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Coming soon - no actual submission
    toast({
      title: "Coming Soon",
      description: "Waitlist will open soon. Check back later!",
    })
    
    setEmail("")
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-900/20 to-bg-base" id="waitlist">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-text-high mb-4">
              Be the first to cook smarter.
            </h2>
            <p className="text-lg text-text-med">
              We’ll only email when beta opens.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled
              className="flex-1 bg-bg-elev1 border-border text-text-high placeholder:text-text-low focus:border-primary disabled:opacity-50"
              data-testid="waitlist-email-input"
            />
            <Button 
              type="submit"
              disabled
              className="bg-primary hover:bg-primary-hover text-white font-medium px-8 disabled:opacity-50"
              data-testid="waitlist-submit-btn"
            >
              Join Waitlist
            </Button>
          </form>

          {/* Privacy Note */}
          <p className="text-sm text-text-low mt-6">
            We’ll only email when beta opens. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  )
}