import { notFound, redirect } from "next/navigation"
import { doc, getDoc, updateDoc, increment } from "firebase/firestore"
import { db } from "@/lib/firebase"

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function RedirectPage({ params }: PageProps) {
    const { slug } = await params

    const docRef = doc(db, "urls", slug)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) {
        notFound()
    }

    const data = docSnap.data()

    // Increment click count (fire and forget)
    await updateDoc(docRef, {
        clicks: increment(1),
    })

    redirect(data.originalUrl)
}
