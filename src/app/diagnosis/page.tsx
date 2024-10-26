'use client'

import { useState, useRef } from 'react'
import Header from '@/components/ui/Header'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'
import Link from 'next/link'

export default function Diagnosis() {
  const baseUrl = "http://127.0.0.1:8080/api"

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
    } else if (diagnosisMethod === 'text' && symptoms) {
      axios.post(`${baseUrl}/dx/send_text`, { symptoms })
          .then(response => {
            // Handle success
            console.log('Response:', response.data);
          })
          .catch(error => {
            // Handle error
            if (error.response) {
              console.log('Error Response:', error.response.data);
              console.log('Error Status:', error.response.status);
            } else if (error.request) {
              console.log('Error Request:', error.request);
            } else {
              console.log('Error Message:', error.message);
            }
          });
      console.log('Diagnosing based on symptoms:', symptoms)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-24">
        <h2 className="text-2xl font-semibold mb-6 text-center cursor-default">Diagnosis</h2>
        <p className="text-xl mb-8 text-center cursor-default">Please upload an Image or enter text...</p>
        <div className="w-full max-w-md space-y-4 mb-8">
          <div className="flex justify-center items-center space-x-4">
            <Button onClick={() => fileInputRef.current?.click()}>
              Upload Image
            </Button>
            <span className="text-muted-foreground cursor-default">or</span>
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