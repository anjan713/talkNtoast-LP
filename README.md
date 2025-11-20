# TalkNToast Landing Page

A modern, dark-themed landing page for TalkNToast — Voice AI that guides you hands-free through cooking.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **Space Grotesk** - Display font for headlines
- **Inter** - Body text font

## Features

✅ Dark theme with purple accent (#8B5CF6)
✅ Sticky navigation with scroll effects
✅ YouTube demo video (inline + modal)
✅ Smooth scroll navigation
✅ Radix UI components (Dialog, Accordion, Toast, AspectRatio)
✅ Full keyboard accessibility
✅ Responsive design (mobile-first)
✅ SEO optimized with metadata

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
    layout.tsx          # Root layout with fonts & metadata
    page.tsx            # Home page (all sections)
    globals.css         # Global styles & dark theme
  /components
    /ui                 # Radix UI components
      accordion.tsx
      button.tsx
      dialog.tsx
      input.tsx
      toast.tsx
      toaster.tsx
    /sections           # Landing page sections
      sticky-nav.tsx    # Top navigation
      hero.tsx          # Above-the-fold
      inline-demo.tsx   # YouTube embed
      problem-solution.tsx  # Split comparison
      how-it-works.tsx  # 3-step process
      features.tsx      # 2×2 feature grid
      waitlist.tsx      # Email capture (disabled)
      faq.tsx           # Accordion Q&A
      footer.tsx        # Legal links
  /lib
    utils.ts            # Utility functions
  /hooks
    use-toast.ts        # Toast notification hook
```

## Sections

1. **Sticky Nav** - Fixed navigation with "Watch demo" modal and scroll links
2. **Hero** - Headlines, text link CTAs, and static UI card mock
3. **Inline Demo** - Embedded YouTube video
4. **Problem → Solution** - Split view with problems vs. solutions
5. **How It Works** - 3-step process cards
6. **Key Features** - 2×2 grid of features
7. **Join Waitlist** - Email form (currently disabled)
8. **FAQ** - 4 accordion items
9. **Footer** - Copyright, legal links, and YouTube icon

## Dark Theme Colors

### Background
- `bg-base`: #0A0A0F (near-black with blue-violet hint)
- `bg-elev1`: #11111A (cards/panels)
- `bg-elev2`: #171727 (modals/dialogs)

### Text
- `text-high`: #FFFFFF (headlines, high contrast)
- `text-med`: #C9C9D4 (body copy)
- `text-low`: #8E8EA0 (captions, meta)
- `text-purple`: #BBA6FF (accent labels)

### Primary Purple
- `primary`: #8B5CF6
- `primary-hover`: #A78BFA
- `primary-deep`: #6D28D9

### Borders & Effects
- `border`: #23233B
- Gradient: #0A0A0F → #2B175F → #5A1FC2
- Glow effects: rgba(139, 92, 246, 0.15-0.2)

## Typography

### Fonts
- **Headlines**: Space Grotesk (700-800 weight)
- **Body**: Inter (400-500 weight)

### Scale
- H1: 56-64px / 1.05 line-height, tight tracking
- H2: 36-44px / 1.15 lh
- Body-lg: 18-20px / 1.6 lh
- Body: 16px / 1.6 lh
- Small: 14px / 1.5 lh

## Customization

### Colors

Edit `/app/tailwind.config.ts` to change the color palette:

```typescript
colors: {
  primary: {
    DEFAULT: '#8B5CF6',
    // ... other shades
  }
}
```

### Content

All section content is in `/components/sections/*.tsx` files. Edit directly to update copy.

### Waitlist Integration

Currently disabled. To enable:

1. Update the `disabled` prop in `/components/sections/waitlist.tsx`
2. Add API route at `/app/api/subscribe/route.ts`
3. Connect to your email service (Mailchimp, ConvertKit, etc.)
4. Update form handler to POST to API

## Accessibility

- Full keyboard navigation
- ARIA labels on all interactive elements
- `data-testid` attributes for testing
- Screen reader optimized
- Focus indicators with 2px purple ring
- Semantic HTML structure

## Performance

- Server-side rendering (SSR)
- Code splitting by route
- Tailwind CSS purging
- Optimized fonts via Next.js Font
- YouTube iframe loads directly (not lazy)

## Development Notes

### YouTube Video

The demo video is embedded at:
- Inline in the "See it in action" section
- Modal popup (nav + hero "Watch demo" links)

Video ID: `YRBOi8Sd8C0`

### Navigation Scroll

Nav links use smooth scroll with 80px offset for sticky header. Configured in `globals.css`:

```css
html {
  scroll-padding-top: 80px;
}
```

### Sticky Nav Effect

Background blur and border appear when scrolled > 20px from top.

## License

See LICENSE file for details.

## Contact

For questions or issues, contact hello@talkntoast.com
