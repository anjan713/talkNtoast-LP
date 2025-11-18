"use client"

import { X, Check } from "lucide-react"

export function ProblemSolution() {
  const problems = [
    "You pause with messy hands.",
    "Videos aren’t built for cooking flow.",
    "Timing gets off.",
  ]

  const solutions = [
    "Voice prompts, no scrolling.",
    "Clear steps from any link.",
    "Auto timers & reminders.",
  ]

  return (
    <section className="py-20 md:py-28 bg-bg-elev1">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Left: Problem */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-high">
              Cooking from social media is messy.
            </h2>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3"
                  data-testid={`problem-${index}`}
                >
                  <div className="w-6 h-6 rounded-full bg-status-danger/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-status-danger" />
                  </div>
                  <p className="text-lg text-text-med leading-relaxed">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Solution */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-high">
              TalkNToast fixes that.
            </h2>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3"
                  data-testid={`solution-${index}`}
                >
                  <div className="w-6 h-6 rounded-full bg-status-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-status-success" />
                  </div>
                  <p className="text-lg text-text-med leading-relaxed">
                    {solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}