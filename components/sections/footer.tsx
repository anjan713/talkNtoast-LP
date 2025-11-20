"use client"

import { Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-bg-elev1 border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Copyright */}
          <div className="text-sm text-text-low">
            © 2025 TalkNToast
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-sm text-text-low hover:text-text-med transition-colors"
              data-testid="footer-privacy"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-sm text-text-low hover:text-text-med transition-colors"
              data-testid="footer-terms"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-sm text-text-low hover:text-text-med transition-colors"
              data-testid="footer-contact"
            >
              Contact
            </a>
            <a 
              href="https://youtu.be/HFbdLGTi0r4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-low hover:text-text-med transition-colors"
              aria-label="YouTube"
              data-testid="footer-youtube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}