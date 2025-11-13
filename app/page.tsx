import { Hero } from "@/components/sections/hero"
import { ProblemPromise } from "@/components/sections/problem-promise"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Features } from "@/components/sections/features"
import { SocialIngestion } from "@/components/sections/social-ingestion"
import { CompetitiveLandscape } from "@/components/sections/competitive-landscape"
import { LiveDemo } from "@/components/sections/live-demo"
import { VisionEcosystem } from "@/components/sections/vision-ecosystem"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { TrustPrivacy } from "@/components/sections/trust-privacy"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemPromise />
      <HowItWorks />
      <Features />
      <SocialIngestion />
      <CompetitiveLandscape />
      <LiveDemo />
      <VisionEcosystem />
      <Pricing />
      <FAQ />
      <TrustPrivacy />
      <FinalCTA />
      <Footer />
    </main>
  )
}