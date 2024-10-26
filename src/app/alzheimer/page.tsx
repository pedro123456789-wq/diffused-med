'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/ui/Header'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UploadCloud } from 'lucide-react'

export default function AlzheimersMRI() {
  const [file, setFile] = useState<File | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setResult(null)
    }
  }

  const handleAnalyze = async () => {
    if (!file) return

    setAnalyzing(true)
    setResult(null)

    // Simulating API call with setTimeout
    setTimeout(() => {
      // This is where you would normally send the file to your backend for analysis
      // For demonstration, we're just setting a random result
      const dementiaLevel = Math.floor(Math.random() * 5) + 1
      setResult(`Based on the MRI analysis, the estimated level of cognitive decline is ${dementiaLevel} out of 5.`)
      setAnalyzing(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-24">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Alzheimer's MRI Analysis</CardTitle>
            <CardDescription>Upload an MRI scan to analyze for Alzheimer's indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <Label htmlFor="mri-upload" className="cursor-pointer">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                  <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                  <span className="mt-2 block text-sm font-semibold text-gray-900">
                    {file ? file.name : "Click to upload MRI scan"}
                  </span>
                </div>
              </Label>
              <Input
                id="mri-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              {file && (
                <Image
                  src={URL.createObjectURL(file)}
                  alt="Uploaded MRI scan"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <Button
              onClick={handleAnalyze}
              disabled={!file || analyzing}
              className="w-full mb-4"
            >
              {analyzing ? "Analyzing..." : "Analyze MRI"}
            </Button>
            {result && (
              <p className="text-center text-sm text-gray-600">{result}</p>
            )}
          </CardFooter>
        </Card>
        <Link href="/" className="mt-8">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </main>
    </div>
  )
}