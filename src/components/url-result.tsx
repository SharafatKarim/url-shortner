"use client"

import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Copy, Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

interface UrlResultProps {
    shortUrl: string
    slug: string
}

export function UrlResult({ shortUrl, slug }: UrlResultProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shortUrl)
            setCopied(true)
            toast.success("Copied to clipboard!")
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            toast.error("Failed to copy")
        }
    }

    return (
        <Card className="w-full max-w-md mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CardHeader>
                <CardTitle className="text-center">Your Short URL</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center space-x-2">
                    <Input value={shortUrl} readOnly className="font-mono text-sm" />
                    <Button size="icon" variant="outline" onClick={handleCopy}>
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                        <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </Button>
                </div>

                <div className="flex justify-center p-4 bg-white rounded-lg w-fit mx-auto border">
                    <QRCodeSVG value={shortUrl} size={150} />
                </div>
            </CardContent>
        </Card>
    )
}
