"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Check } from "lucide-react"

export function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-white" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Early access pricing
          </h2>
          <p className="text-lg text-neutral-600">
            Get started for free during our beta period
          </p>
        </div>

        <Tabs defaultValue="home-cooks" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="home-cooks">Home Cooks</TabsTrigger>
            <TabsTrigger value="creators">Creators</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
          </TabsList>

          <TabsContent value="home-cooks">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">Beta</Badge>
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <CardDescription>Perfect for getting started</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-neutral-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Voice-guided cooking",
                      "Social recipe ingestion",
                      "Basic timers",
                      "Recipe vault (up to 50)",
                      "Smart device integration",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline" data-testid="get-started-free-btn">
                    Get Started Free
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary-500 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary-500">Coming Soon</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <CardDescription>For serious home cooks</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="text-neutral-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Everything in Free",
                      "Unlimited recipe vault",
                      "Advanced meal planning",
                      "Smart inventory sync",
                      "Grocery list export",
                      "Priority support",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" disabled>
                    Notify Me
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="creators">
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Creator Program</CardTitle>
                <CardDescription className="text-lg mt-2">
                  Monetize your recipes and grow your audience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Free to join</p>
                      <p className="text-sm text-neutral-600">No upfront costs or platform fees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Revenue share on paid add-ons</p>
                      <p className="text-sm text-neutral-600">Earn from premium recipe features and exclusives</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Analytics dashboard</p>
                      <p className="text-sm text-neutral-600">Track engagement and earnings</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full" size="lg" data-testid="join-creator-program-btn">
                  Apply to Creator Program
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="platforms">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary-50 to-white">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Enterprise Licensing</CardTitle>
                <CardDescription className="text-lg mt-2">
                  White-label voice AI for your recipe platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {[
                    "Voice AI SDK & APIs",
                    "Social recipe ingestion",
                    "Custom branding",
                    "Dedicated support",
                    "Privacy & compliance playbook",
                    "Volume pricing",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-neutral-900">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full" size="lg" data-testid="book-platform-call-btn">
                  Book a 20-min Call
                </Button>
                <p className="text-sm text-center text-neutral-600">
                  Custom pricing based on your needs
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}