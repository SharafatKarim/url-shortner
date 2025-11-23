import Link from "next/link"

export function Footer() {
    return (
        <footer className="py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="text-center text-xs text-muted-foreground">
                <p>
                    Built by{" "}
                        <a
                            href="mailto:sharafat@duck.com"
                            className="font-medium underline underline-offset-4"
                        >
                            Sharafat Karim
                        </a>
                        . The source code is available on{" "}
                        <a
                            href="https://github.com/SharafatKarim/url-shortner"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        . You can read the{" "}
                        <Link
                            href="/privacy"
                            className="font-medium underline underline-offset-4"
                        >
                            Privacy Policy
                        </Link>
                        {" "} here. <br />
                    ⚠️ Warning: All URLs created here are public and stored in our database.
                    Do not share sensitive information.
                </p>
            </div>
        </footer>
    )
}
