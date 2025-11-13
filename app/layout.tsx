import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  title: "TalkNToast — Voice AI for Hands-Free Cooking",
  description: "Turn any social recipe into a voice-guided, step-by-step experience. Integrates with Alexa, Google Home and kitchen devices.",
  keywords: ["voice cooking", "recipe AI", "hands-free cooking", "smart kitchen", "TikTok recipes", "YouTube recipes"],
  openGraph: {
    title: "TalkNToast — Voice AI for Hands-Free Cooking",
    description: "Turn any social recipe into a voice-guided, step-by-step experience.",
    type: "website",
    url: "https://talkntoast.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TalkNToast — Voice AI for Hands-Free Cooking",
    description: "Turn any social recipe into a voice-guided, step-by-step experience.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.variable}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}