import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "TalkNToast — Cook without stopping",
  description: "Paste any recipe — YouTube, TikTok, or blogs — and get hands-free, step-by-step voice guidance.",
  keywords: ["voice cooking", "recipe AI", "hands-free cooking", "TikTok recipes", "YouTube recipes"],
  openGraph: {
    title: "TalkNToast — Cook without stopping",
    description: "Paste any recipe — YouTube, TikTok, or blogs — and get hands-free, step-by-step voice guidance.",
    type: "website",
    url: "https://talkntoast.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TalkNToast — Cook without stopping",
    description: "Paste any recipe — YouTube, TikTok, or blogs — and get hands-free, step-by-step voice guidance.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}