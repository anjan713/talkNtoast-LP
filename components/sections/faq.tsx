"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is TalkNToast?",
      answer: "TalkNToast is a voice-guided cooking assistant that turns any recipe from YouTube, TikTok, or blogs into hands-free, step-by-step instructions. Just paste a link and cook with voice commands.",
    },
    {
      question: "When does beta open?",
      answer: "We're currently in development and will be launching our beta program soon. Join the waitlist to be notified as soon as we open access.",
    },
    {
      question: "Which devices will it support?",
      answer: "TalkNToast will work on smartphones (iOS and Android), tablets, and through smart speakers like Amazon Alexa and Google Home. We're also exploring integrations with smart kitchen displays.",
    },
    {
      question: "How do I join the waitlist?",
      answer: "Simply enter your email in the waitlist form above. We'll send you an invitation as soon as beta spots become available. You'll be among the first to experience hands-free cooking.",
    },
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

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
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
        </div>
      </div>
    </section>
  )
}