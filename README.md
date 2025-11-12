# TalkNToast Landing Page

A modern, accessible landing page for TalkNToast — Voice AI that plans, guides, and transforms cooking.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

## Features

✅ 13 comprehensive sections as specified
✅ Radix UI components (Dialog, Accordion, Tabs, Toast, etc.)
✅ Full keyboard accessibility
✅ Responsive design (mobile-first)
✅ SEO optimized with metadata
✅ Purple accent color scheme (#7B3FE4)
✅ Interactive demos and CTAs
✅ Email capture forms

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
yarn build
yarn start
```

## Project Structure

```
/app
  /app                  # Next.js app directory
    layout.tsx          # Root layout with metadata
    page.tsx            # Home page (all sections)
    globals.css         # Global styles
  /components
    /ui                 # Radix UI components
    /sections           # Landing page sections
  /lib
    utils.ts            # Utility functions
  /hooks
    use-toast.ts        # Toast notification hook
```

## Sections

1. **Hero** - Above-the-fold with CTAs and demo
2. **Problem → Promise** - Pain points and solution
3. **How It Works** - 3-step process
4. **Features** - Tabbed feature showcase
5. **Social Ingestion** - Recipe import demo
6. **Competitive Landscape** - Comparison table
7. **Live Demo** - Interactive recipe walkthrough
8. **Vision/Ecosystem** - Future roadmap
9. **Pricing** - Tiered pricing tabs
10. **FAQ** - Accordion Q&A
11. **Trust/Privacy** - Security features
12. **Final CTA** - Email capture
13. **Footer** - Links and legal

## Customization

### Colors

Edit `/tailwind.config.ts` to change the color palette:

```typescript
primary: {
  DEFAULT: '#7B3FE4', // Rich purple accent
  // ... other shades
}
```

### Content

All section content is in `/components/sections/*.tsx` files. Edit directly to update copy, features, or pricing.

### Email Integration

Currently uses placeholder form submission. To integrate:

1. Add API route in `/app/api/subscribe/route.ts`
2. Connect to your email service (Mailchimp, ConvertKit, etc.)
3. Update form handlers in `final-cta.tsx`

## Accessibility

- Full keyboard navigation
- ARIA labels on all interactive elements
- `data-testid` attributes for testing
- Screen reader optimized
- Focus indicators

## Performance

- Server-side rendering (SSR)
- Image optimization (Next.js Image)
- Code splitting by route
- Tailwind CSS purging

## License

See LICENSE file for details.

## Support

For questions or issues, contact hello@talkntoast.com
