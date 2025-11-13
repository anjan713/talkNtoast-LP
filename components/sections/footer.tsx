import { Mail, Youtube, Instagram, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const links = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Demo", href: "#demo" },
      { name: "FAQ", href: "#faq" },
    ],
    creators: [
      { name: "Creator Program", href: "#creators" },
      { name: "Monetization", href: "#monetization" },
      { name: "Guidelines", href: "#guidelines" },
    ],
    platforms: [
      { name: "Enterprise", href: "#enterprise" },
      { name: "API Docs", href: "#docs" },
      { name: "SDK", href: "#sdk" },
      { name: "Partners", href: "#partners" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
    ],
  }

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg" />
              <span className="text-xl font-bold text-white">TalkNToast</span>
            </div>
            <p className="text-sm text-neutral-400 mb-4">
              Voice AI that plans, guides, and transforms cooking.
            </p>
            <div className="flex gap-3">
              <a href="#youtube" className="hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#instagram" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#twitter" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Creators */}
          <div>
            <h3 className="text-white font-semibold mb-4">Creators</h3>
            <ul className="space-y-2">
              {links.creators.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platforms</h3>
            <ul className="space-y-2">
              {links.platforms.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-neutral-800 mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p>© 2025 TalkNToast. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@talkntoast.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              hello@talkntoast.com
            </a>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="mt-6 text-xs text-neutral-500 text-center">
          <p>
            TalkNToast is not affiliated with YouTube, TikTok, Instagram, or other social media platforms.
            All trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  )
}