"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { nanoid } from "nanoid"
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
    url: z.string().url({ message: "Please enter a valid URL." }),
    slug: z
        .string()
        .min(3, { message: "Slug must be at least 3 characters." })
        .max(20, { message: "Slug must be at most 20 characters." })
        .regex(/^[a-zA-Z0-9-_]+$/, {
            message: "Slug can only contain letters, numbers, hyphens, and underscores.",
        })
        .optional()
        .or(z.literal("")),
})

interface ShortenFormProps {
    onSuccess: (shortUrl: string, slug: string) => void
}

export function ShortenForm({ onSuccess }: ShortenFormProps) {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            url: "",
            slug: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        try {
            let slug = values.slug
            if (!slug) {
                slug = nanoid(6)
            }

            const docRef = doc(db, "urls", slug)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                if (values.slug) {
                    form.setError("slug", {
                        type: "manual",
                        message: "This custom slug is already taken.",
                    })
                    setIsLoading(false)
                    return
                } else {
                    // If auto-generated slug exists (rare), try again (simple retry logic could be added here, but for now just error)
                    // In a real app, we'd loop until we find a free one.
                    // For MVP, let's just try one more time or fail.
                    slug = nanoid(6)
                    const retryRef = doc(db, "urls", slug)
                    const retrySnap = await getDoc(retryRef)
                    if (retrySnap.exists()) {
                        toast.error("Failed to generate a unique slug. Please try again.")
                        setIsLoading(false)
                        return
                    }
                }
            }

            await setDoc(doc(db, "urls", slug), {
                originalUrl: values.url,
                slug: slug,
                createdAt: serverTimestamp(),
                clicks: 0,
            })

            const shortUrl = `${window.location.origin}/${slug}`
            onSuccess(shortUrl, slug)
            toast.success("URL shortened successfully!")
            form.reset()
        } catch (error) {
            console.error("Error adding document: ", error)
            toast.error("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Destination URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Custom Slug (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="custom-name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Shortening...
                        </>
                    ) : (
                        "Shorten URL"
                    )}
                </Button>
            </form>
        </Form>
    )
}
