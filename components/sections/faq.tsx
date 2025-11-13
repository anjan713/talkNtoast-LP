import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How do you handle social media links and permissions?",
      answer: "We work with a rights-respecting model. For public recipes, we extract structured data for personal use. For creators in our program, we have direct partnerships. We never violate platform ToS and always attribute content to original creators.",
    },
    {
      question: "What devices are supported?",
      answer: "TalkNToast works with Amazon Alexa, Google Home, smartphones (iOS/Android), tablets, and compatible smart kitchen devices including smart ovens, displays, and IoT timers. You can also use it directly through our web app.",
    },
    {
      question: "Can it work offline?",
      answer: "Basic recipe viewing works offline once downloaded. However, voice guidance, social recipe ingestion, and smart device integration require an internet connection for the best experience.",
    },
    {
      question: "How do substitutions and allergies work?",
      answer: "You can set dietary preferences and allergies in your profile. When a recipe contains allergens, TalkNToast will alert you and suggest alternatives. During cooking, just ask \"What can I substitute for [ingredient]?\" and get instant suggestions.",
    },
    {
      question: "What about privacy and training data?",
      answer: "Your cooking data is private by default. We only use aggregated, anonymized data for AI training, and you can opt out completely. We never share personal recipe collections or cooking history with third parties. Full details in our Privacy Policy.",
    },
    {
      question: "How accurate is the recipe extraction from videos?",
      answer: "Our AI achieves 90%+ accuracy on well-structured cooking videos. For complex or unclear content, we flag steps for review. You can always edit extracted recipes before cooking.",
    },
    {
      question: "Can I use it for meal prep and batch cooking?",
      answer: "Absolutely! You can scale recipes up or down, and our voice guidance adapts timing and instructions accordingly. The Pro version includes advanced meal planning features.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-neutral-50" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-neutral-600">
              Everything you need to know about TalkNToast
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-lg px-6 border border-neutral-200"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-neutral-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 leading-relaxed">
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