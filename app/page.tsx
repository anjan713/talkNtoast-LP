import { StickyNav } from "@/components/sections/sticky-nav"
import { Hero } from "@/components/sections/hero"
import { InlineDemo } from "@/components/sections/inline-demo"
import { ProblemSolution } from "@/components/sections/problem-solution"
import { WhyPeopleWantThis } from "@/components/sections/why-people-want-this"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Features } from "@/components/sections/features"
import { Vision } from "@/components/sections/vision"
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
        <WhyPeopleWantThis />
        <HowItWorks />
        <Features />
        <Vision />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}