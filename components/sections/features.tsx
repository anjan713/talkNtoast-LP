"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Volume2, Video, Brain, Calendar, Radio, Code } from "lucide-react"

export function Features() {
  const homeCookFeatures = [
    {
      icon: Volume2,
      title: "Voice-first guidance",
      description: "Step-by-step prompts, hands-free controls, and automatic timers keep you cooking without interruption.",
    },
    {
      icon: Video,
      title: "Understands social recipes",
      description: "Pulls structured steps from videos and links you already trust—TikTok, YouTube, Instagram, and blogs.",
    },
    {
      icon: Brain,
      title: "Learns your style",
      description: "Adapts to your dietary needs, regional flavors, preferred cookware, and spice preferences.",
    },
    {
      icon: Calendar,
      title: "All-in-one kitchen hub",
      description: "Recipe vault, meal planning, smart inventory tracking, and one-click grocery list export.",
    },
    {
      icon: Radio,
      title: "Smart device integration",
      description: "Works seamlessly with Alexa, Google Home, smart ovens, scales, and IoT timers.",
    },
  ]

  const platformFeatures = [
    {
      icon: Code,
      title: "Voice AI SDK",
      description: "Complete SDK for voice-guided cooking experiences with step extraction and orchestration.",
    },
    {
      icon: Video,
      title: "Social ingestion APIs",
      description: "Parse and structure recipes from social media platforms with rights-respecting technology.",
    },
    {
      icon: Brain,
      title: "Personalization services",
      description: "White-label personalization engine for dietary preferences, substitutions, and user learning.",
    },
    {
      icon: Radio,
      title: "IoT integration",
      description: "Pre-built connections to major smart kitchen device ecosystems and protocols.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Built for real kitchens, not just recipe pages
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Everything you need for a modern, hands-free cooking experience
          </p>
        </div>

        <Tabs defaultValue="home-cook" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="home-cook" data-testid="home-cook-tab">Home Cook</TabsTrigger>
            <TabsTrigger value="platform" data-testid="platform-tab">For Platforms</TabsTrigger>
          </TabsList>

          <TabsContent value="home-cook" data-testid="home-cook-features">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeCookFeatures.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary-200 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-neutral-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="platform" data-testid="platform-features">
            <div className="grid md:grid-cols-2 gap-6">
              {platformFeatures.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary-200 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-neutral-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}