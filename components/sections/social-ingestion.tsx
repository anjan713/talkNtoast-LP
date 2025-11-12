"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link2, FileText, Users } from "lucide-react"

export function SocialIngestion() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Killer Differentiator</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Use the recipes you discover—no copy-paste gymnastics
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Creators and home cooks live on TikTok, Instagram, and YouTube. TalkNToast parses those links, structures steps, and guides you by voice.
            </p>
          </div>

          <Card className="p-8 shadow-xl border-2 border-primary-100">
            <Tabs defaultValue="paste" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="paste" data-testid="paste-link-tab">
                  <Link2 className="w-4 h-4 mr-2" />
                  Paste a link
                </TabsTrigger>
                <TabsTrigger value="upload" data-testid="upload-text-tab">
                  <FileText className="w-4 h-4 mr-2" />
                  Upload text
                </TabsTrigger>
                <TabsTrigger value="creator" data-testid="from-creator-tab">
                  <Users className="w-4 h-4 mr-2" />
                  From creator
                </TabsTrigger>
              </TabsList>

              <TabsContent value="paste" className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Recipe URL</label>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="https://www.youtube.com/watch?v=..." 
                      className="flex-1"
                      data-testid="recipe-url-input"
                    />
                    <Button data-testid="import-recipe-btn">Import</Button>
                  </div>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-sm text-neutral-600 mb-2">Supported platforms:</p>
                  <div className="flex flex-wrap gap-2">
                    {["YouTube", "TikTok", "Instagram", "Recipe Blogs", "Food Network"].map((platform) => (
                      <Badge key={platform} variant="outline">{platform}</Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="upload" className="space-y-4">
                <div className="border-2 border-dashed border-neutral-300 rounded-lg p-12 text-center">
                  <FileText className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                  <p className="text-neutral-600 mb-2">Drop recipe text file or paste directly</p>
                  <Button variant="outline">Choose File</Button>
                </div>
              </TabsContent>

              <TabsContent value="creator" className="space-y-4">
                <div className="text-center py-8">
                  <Users className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Creator Program</h3>
                  <p className="text-neutral-600 mb-4">Partner with verified creators for direct recipe access</p>
                  <Button variant="ghost">Learn More</Button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-sm text-neutral-700">
              <strong>Why it matters:</strong> Chat-style UIs can't use pasted links due to ToS; TalkNToast's ingestion + rights-respecting creator program is built for it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}