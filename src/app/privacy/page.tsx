import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="/">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
                </div>

                <div className="prose dark:prose-invert max-w-none space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Data Collection and Visibility</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Please be aware that this is a public URL shortener service.
                            <strong> All URLs created on this platform are public by default</strong> and are stored in our Firebase database.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            Anyone with access to the analytics page can view the list of shortened URLs,
                            including the original destination URLs and click statistics.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Data Removal</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We do not currently offer a self-service way to delete URLs.
                            If you need a URL to be removed from our service, please contact the maintainer
                            via email with the short URL and a reason for removal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For any privacy concerns or data removal requests, please contact:
                            <br />
                            <a href="mailto:sharafat@duck.com" className="text-primary hover:underline">
                                sharafat@duck.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
