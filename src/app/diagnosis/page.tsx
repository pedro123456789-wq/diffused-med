'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'

export default function Diagnosis() {
  const baseUrl = "http://127.0.0.1:8080/api"

  const [diagnosisMethod, setDiagnosisMethod] = useState<'image' | 'text' | null>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [symptoms, setSymptoms] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the symptoms to your backend
    console.log('Symptoms submitted:', symptoms)
    // For now, we'll just log the symptoms
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
      const formData = new FormData()
      formData.append('image', selectedImage)
      axios.post(`${baseUrl}/dx/send_picture`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
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
}