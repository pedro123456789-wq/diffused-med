import Link from 'next/link'
import Header from '@/components/ui/Header'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-24">
        <h2 className="text-2xl font-semibold mb-6 text-center">Welcome to Nillion Medical</h2>
        <p className="text-xl mb-8 text-center">Choose an option:</p>
        <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Translation</CardTitle>
              <CardDescription>Translate medical terms and phrases</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Our advanced AI can translate complex medical terminology across multiple languages, ensuring accurate communication in healthcare settings.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/translation">
                  Start Translation
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Diagnosis</CardTitle>
              <CardDescription>Get AI-assisted medical diagnosis</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Upload an image or describe symptoms to receive an AI-powered preliminary diagnosis. Always consult with a healthcare professional for definitive medical advice.</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/diagnosis">
                  Start Diagnosis
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Link href="https://nillion.com/" className="text-blue-500 hover:underline mt-8" target="_blank" rel="noopener noreferrer">
          Learn more about Nillion
        </Link>
      </main>
    </div>
  )
}