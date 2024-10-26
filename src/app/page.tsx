import Link from 'next/link'
import Image from 'next/image'
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
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
              <CardTitle>Symptom Diagnosis</CardTitle>
              <CardDescription>Get AI-assisted medical diagnosis</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Describe your symptoms to receive an AI-powered preliminary diagnosis. Our system analyzes your input to provide insights. Always consult with a healthcare professional for definitive medical advice.</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/diagnosis">
                  Start Diagnosis
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Alzheimer's MRI Analysis</CardTitle>
              <CardDescription>Analyze MRI scans for Alzheimer's indicators</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Upload an MRI image for AI-powered analysis. Our system will assess the scan and provide an estimate of cognitive decline indicators associated with Alzheimer's disease.</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/alzheimer">
                  Analyze MRI
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center mb-4">
            <span className="text-sm text-gray-600 mr-2">powered by</span>
            <div className="bg-blue-600 p-2 rounded">
              <Image
                src="/nillion_logo.svg"
                alt="Nillion logo"
                width={199}
                height={54}
                className="inline-block"
              />
            </div>
          </div>
          <Link href="https://nillion.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Learn more about Nillion
          </Link>
        </div>
      </main>
    </div>
  )
}