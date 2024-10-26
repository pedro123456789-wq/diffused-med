'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function Diagnosis() {
  const [symptoms, setSymptoms] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the symptoms to your backend
    console.log('Symptoms submitted:', symptoms)
    // For now, we'll just log the symptoms
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-24">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Symptom Diagnosis</CardTitle>
            <CardDescription>Describe your symptoms for an AI-assisted diagnosis</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <Textarea
                  placeholder="Describe your symptoms here..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  rows={6}
                  className="w-full"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <Button
                type="submit"
                className="w-full mb-4"
                disabled={!symptoms.trim()}
              >
                Submit for Diagnosis
              </Button>
            </CardFooter>
          </form>
        </Card>
        <Link href="/" className="mt-8">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </main>
    </div>
  )
}