import { StickyNav } from "@/components/sections/sticky-nav"
import { Hero } from "@/components/sections/hero"
import { InlineDemo } from "@/components/sections/inline-demo"
import { ProblemSolution } from "@/components/sections/problem-solution"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Features } from "@/components/sections/features"
import { Waitlist } from "@/components/sections/waitlist"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <StickyNav />
      <main className="min-h-screen">
        <Hero />
        <InlineDemo />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}