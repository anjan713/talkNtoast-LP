"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Volume2, Timer, ChevronRight } from "lucide-react"

export function LiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const recipe = {
    title: "Garlic Butter Shrimp",
    totalTime: "10 minutes",
    steps: [
      { id: 1, text: "Heat 2 tablespoons butter in a large skillet over medium-high heat", time: 30 },
      { id: 2, text: "Add minced garlic and cook until fragrant, about 1 minute", time: 60 },
      { id: 3, text: "Add shrimp and cook until pink, 2-3 minutes per side", time: 180 },
      { id: 4, text: "Season with salt, pepper, and squeeze of lemon", time: 30 },
    ],
  }

  const handleStart = () => {
    setIsPlaying(true)
    setCurrentStep(1)
  }

  const handleNext = () => {
    if (currentStep < recipe.steps.length) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsPlaying(false)
      setCurrentStep(1)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Try a 2-minute recipe
            </h2>
            <p className="text-lg text-neutral-600">
              Experience the voice-guided flow with a quick sample recipe
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader className="border-b bg-gradient-to-r from-primary-50 to-white">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{recipe.title}</CardTitle>
                  <p className="text-sm text-neutral-600 mt-1">
                    <Timer className="inline w-4 h-4 mr-1" />
                    {recipe.totalTime}
                  </p>
                </div>
                <Badge variant="secondary">Sample Recipe</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              {!isPlaying ? (
                <div className="text-center py-12" data-testid="demo-start-screen">
                  <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ready to cook?</h3>
                  <p className="text-neutral-600 mb-6">Start the voice demo to see TalkNToast in action</p>
                  <Button 
                    size="lg" 
                    onClick={handleStart}
                    data-testid="start-voice-demo-btn"
                  >
                    <Volume2 className="w-5 h-5 mr-2" />
                    Start Voice Demo
                  </Button>
                </div>
              ) : (
                <div className="space-y-6" data-testid="demo-active-screen">
                  {/* Progress */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-neutral-600">
                      Step {currentStep} of {recipe.steps.length}
                    </span>
                    <div className="flex gap-1">
                      {recipe.steps.map((_, index) => (
                        <div 
                          key={index}
                          className={`h-2 w-12 rounded-full ${
                            index + 1 <= currentStep ? 'bg-primary-500' : 'bg-neutral-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Current Step */}
                  <div className="bg-neutral-900 text-white rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <Volume2 className="w-8 h-8 text-primary-400 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-lg font-medium leading-relaxed">
                          {recipe.steps[currentStep - 1].text}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <Timer className="w-4 h-4 text-primary-400" />
                          <span className="text-sm text-neutral-300">
                            ~{recipe.steps[currentStep - 1].time}s
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Voice Commands */}
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" size="sm" className="w-full">
                      Repeat
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Substitute?
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Skip
                    </Button>
                  </div>

                  {/* Next Step */}
                  <Button 
                    className="w-full" 
                    size="lg" 
                    onClick={handleNext}
                    data-testid="next-step-btn"
                  >
                    {currentStep < recipe.steps.length ? (
                      <>
                        Next Step
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </>
                    ) : (
                      "Finish Recipe"
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}