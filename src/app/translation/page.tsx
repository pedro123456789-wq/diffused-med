import Header from '@/components/ui/Header'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Translation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-24">
        <h2 className="text-2xl font-semibold mb-6 text-center">Translation Service</h2>
        <p className="text-xl mb-8 text-center">Enter text to translate</p>
        {/* Add your translation form or component here */}
        <Link href="/" passHref>
          <Button variant="outline">Back to Home</Button>
        </Link>
      </main>
    </div>
  )
}