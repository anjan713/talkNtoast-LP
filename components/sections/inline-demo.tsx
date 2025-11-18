"use client"

import * as AspectRatio from "@radix-ui/react-aspect-ratio"

export function InlineDemo() {
  return (
    <section className="py-20 md:py-28 bg-bg-base" id="demo">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-text-high mb-3">
              See it in action
            </h2>
          </div>

          {/* YouTube Embed */}
          <div className="relative rounded-[20px] overflow-hidden shadow-glow border border-border/50">
            <AspectRatio.Root ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/YRBOi8Sd8C0?si=3w9hKpkuuqtEr3SE"
                title="TalkNToast Demo - 60 second overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                data-testid="inline-demo-video"
              />
            </AspectRatio.Root>
          </div>

          {/* Caption */}
          <p className="text-center text-sm text-text-low mt-4">
            60-second overview
          </p>
        </div>
      </div>
    </section>
  )
}