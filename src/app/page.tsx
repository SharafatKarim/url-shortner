"use client"

import { useState } from "react"
import { ShortenForm } from "@/components/shorten-form"
import { UrlResult } from "@/components/url-result"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3 } from "lucide-react"

export default function Home() {
  const [result, setResult] = useState<{ shortUrl: string; slug: string } | null>(
    null
  )

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="p-4 flex justify-end items-center gap-2">
        <Button variant="ghost" asChild>
          <Link href="/analytics">
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics
          </Link>
        </Button>
        <ThemeToggle />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-24">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Shorten Your Links
          </h1>
          <p className="text-muted-foreground text-lg max-w-[600px]">
            A minimal, ads and distraction free, public URL shortener.
            Generate and track analytics without any account!
          </p>
        </div>

        <ShortenForm
          onSuccess={(shortUrl, slug) => setResult({ shortUrl, slug })}
        />

        {result && <UrlResult shortUrl={result.shortUrl} slug={result.slug} />}
      </main>
    </div>
  )
}
