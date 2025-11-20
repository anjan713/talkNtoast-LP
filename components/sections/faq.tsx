"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is TalkNToast?",
      answer: "TalkNToast is a voice-guided cooking assistant that turns any recipe from YouTube, TikTok, or blogs into hands-free, step-by-step instructions. Just paste a link and cook with voice commands.",
      id: null,
    },
  ]

  const marketInsightsFAQ = [
    {
      id: "faq-voice-assistant-market",
      emoji: "🗣️",
      question: "Voice Assistant Market",
      insights: [
        {
          text: "The global voice assistant market was valued at USD 7.35 billion in 2024 and is expected to reach USD 33.74 billion by 2030 (CAGR 26.5%).",
          source: "Next Move Strategy Consulting",
          link: "https://www.nextmsc.com/report/voice-assistant-market"
        },
        {
          text: "Software-focused voice assistant market to add USD 36.75 billion by 2029 (CAGR 46.7%).",
          source: "Technavio",
          link: "https://www.technavio.com/report/voice-assistant-application-market-industry-analysis"
        }
      ]
    },
    {
      id: "faq-smart-kitchen-market",
      emoji: "🍳",
      question: "Smart Kitchen Market",
      insights: [
        {
          text: "The global smart kitchen market is projected to reach USD 37.2 billion by 2030 (CAGR 11.3%).",
          source: "Mordor Intelligence",
          link: "https://www.mordorintelligence.com/industry-reports/smart-kitchen-appliances-market"
        },
        {
          text: "Smart kitchen appliances market: USD 60.2 billion by 2030 (CAGR 17.9%).",
          source: "Grand View Research",
          link: "https://www.grandviewresearch.com/industry-analysis/smart-kitchen-appliances-market"
        }
      ]
    },
    {
      id: "faq-ai-kitchen-market",
      emoji: "🤖",
      question: "AI-Enabled Kitchen Market",
      insights: [
        {
          text: "AI-enabled kitchen appliances market: USD 11.62 billion by 2034 (CAGR 30.5%).",
          source: "Global Growth Insights",
          link: "https://www.globalgrowthinsights.com/market-reports/ai-enabled-kitchen-appliances-market-109481"
        },
        {
          text: "Voice-controlled kitchen devices projected USD 41.4 billion by 2034 (CAGR 11.4%).",
          source: "Dimension Market Research",
          link: "https://www.dimensionmarketresearch.com/report/voice-controlled-kitchen-devices-market"
        }
      ]
    },
    {
      id: "faq-creator-economy",
      emoji: "🎥",
      question: "Creator & Recipe Economy",
      insights: [
        {
          text: "Cooking content is the #1 influencer category, with 51% of global users consuming recipe content on social media.",
          source: "eMarketer & Snap/IPG Magna Report",
          link: "https://www.emarketer.com/"
        },
        {
          text: "Global creator economy valued over USD 250 billion in 2024, projected USD 480 billion by 2027.",
          source: "Goldman Sachs Creator Economy Report",
          link: "https://www.goldmansachs.com/"
        }
      ]
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-bg-base" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-high mb-3">
              Frequently asked questions
            </h2>
          </div>

          {/* General FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-bg-elev1 rounded-2xl px-6 border border-border/50"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-text-high text-base md:text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-text-med leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Market Insights Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-high mb-3">
                Market Insights & Sources
              </h2>
              <p className="text-base text-text-med">
                Detailed research and statistics backing TalkNToast's market opportunity
              </p>
            </div>

            <div className="space-y-8">
              {marketInsights.map((market, index) => (
                <div
                  key={index}
                  id={market.id}
                  className="bg-bg-elev1 rounded-2xl p-6 md:p-8 border border-primary/30 scroll-mt-24"
                  data-testid={`market-insight-${index}`}
                >
                  {/* Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{market.emoji}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-text-high">
                      {market.title}
                    </h3>
                  </div>

                  {/* Insights */}
                  <div className="space-y-6">
                    {market.insights.map((insight, idx) => (
                      <div key={idx} className="space-y-2">
                        <p className="text-base text-text-med leading-relaxed">
                          {insight.text}
                        </p>
                        <a
                          href={insight.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors"
                        >
                          <span>→ Source: {insight.source}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}