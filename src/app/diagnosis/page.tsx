'use client'

import { useState, useRef } from 'react'
import Header from '@/components/ui/Header'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'

export default function Diagnosis() {
  const [diagnosisMethod, setDiagnosisMethod] = useState<'image' | 'text' | null>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [symptoms, setSymptoms] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0])
      setDiagnosisMethod('image')
    }
  }

  const handleTextEntry = () => {
    setDiagnosisMethod('text')
    setSelectedImage(null)
  }

  const handleSubmit = () => {
    if (diagnosisMethod === 'image' && selectedImage) {
      console.log('Diagnosing based on image:', selectedImage.name)
      // Here you would typically upload the image and process it
    } else if (diagnosisMethod === 'text' && symptoms) {
      console.log('Diagnosing based on symptoms:', symptoms)
      // Here you would typically send the symptoms text for processing
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-24">
        <h2 className="text-2xl font-semibold mb-6 text-center">Diagnosis</h2>
        <p className="text-xl mb-8 text-center">Please upload an Image or enter text...</p>
        <div className="w-full max-w-md space-y-4 mb-8">
          <div className="flex justify-center items-center space-x-4">
            <Button onClick={() => fileInputRef.current?.click()}>
              Upload Image
            </Button>
            <span className="text-muted-foreground">or</span>
            <Button onClick={handleTextEntry} variant="outline">
              Enter Text
            </Button>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
          {diagnosisMethod === 'image' && selectedImage && (
            <p className="text-center">{selectedImage.name}</p>
          )}
          {diagnosisMethod === 'text' && (
            <Textarea
              placeholder="Enter your symptoms here..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="min-h-[100px]"
            />
          )}
          {diagnosisMethod && (
            <Button className="w-full" onClick={handleSubmit}>
              Submit for Diagnosis
            </Button>
          )}
        </div>
        <Link href="/" passHref>
          <Button variant="outline">Back to Home</Button>
        </Link>
      </main>
    </div>
  )
}