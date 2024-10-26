import Link from 'next/link'
import Header from '@/components/ui/Header'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-24">
        <h2 className="text-2xl font-semibold mb-6 text-center">Welcome to Nillion Medical</h2>
        <p className="text-xl mb-8 text-center">Choose an option:</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button asChild>
            <Link href="/photo-diagnosis" className="w-full sm:w-auto">
              Translation
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/text-translation" className="w-full sm:w-auto">
              Diagnosis
            </Link>
          </Button>
        </div>
        <Link href="https://nillion.com/" className="text-blue-500 hover:underline">
          Learn more about Nillion
        </Link>
      </main>
    </div>
  )
}