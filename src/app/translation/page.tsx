'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/ui/Header'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'
import { Mic, MicOff } from 'lucide-react'

const languages = [
  { value: 'ch', label: 'Chinese' },
  { value: 'ko', label: 'Korean' },
  { value: 'ja', label: 'Japanese' },
  { value: 'it', label: 'Italian' },
  { value: 'pt', label: 'Portuguese' },
]

export default function Translation() {
  const [inputText, setInputText] = useState('')
  const [targetLanguage, setTargetLanguage] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [isListening, setIsListening] = useState(false)
  // const [speechRecognition, setSpeechRecognition] = useState<SpeechRecognition | null>(null)

  const handleTranslate = () => {
    // Here you would typically call your translation API
    // For now, we'll just set a mock translated text
    setTranslatedText(`Translated "${inputText}" to ${targetLanguage}`)
  }

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  //     const recognition = new SpeechRecognition()
  //     recognition.continuous = true
  //     recognition.interimResults = true
  //     recognition.lang = 'en-US'

  //     recognition.onresult = (event: any) => {
  //       const transcript = Array.from(event.results)
  //         .map(result => result[0])
  //         .map(result => result.transcript)
  //         .join('')

  //       setInputText(prevText => prevText + ' ' + transcript)
  //     }

  //     recognition.onerror = (event) => {
  //       console.error('Speech recognition error', event.error)
  //       setIsListening(false)
  //     }

  //     setSpeechRecognition(recognition)
  //   }
  // }, [])

  // const toggleListening = () => {
  //   if (isListening) {
  //     speechRecognition?.stop()
  //     setIsListening(false)
  //   } else {
  //     speechRecognition?.start()
  //     setIsListening(true)
  //   }
  // }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-24">
        <h2 className="text-2xl font-semibold mb-6 text-center cursor-default">Translation Service</h2>
        <p className="text-xl mb-8 text-center cursor-default">Please type what you want translated</p>
        <div className="w-full max-w-md space-y-4 mb-8">
          <div className="flex space-x-4 items-center">
            <Textarea 
              placeholder="Enter text here..." 
              className="min-h-[100px]"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <Button
                // onClick={toggleListening}
                variant="outline"
                className={`p-2 ${isListening ? 'bg-red-100 hover:bg-red-200' : ''}`}
                aria-label={isListening ? 'Stop listening' : 'Start listening'}
              >
                {isListening ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
            </Button>
          </div>
          <p className="text-xl mb-8 text-center cursor-default">Select the Language</p>
          <Select onValueChange={setTargetLanguage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select target language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button 
            className="w-full" 
            onClick={handleTranslate}
            disabled={!inputText || !targetLanguage}
          >
            Translate
          </Button>
        </div>
        {translatedText && (
          <div className="w-full max-w-md mb-8">
            <h3 className="text-lg font-semibold mb-2">Translated Text:</h3>
            <Textarea 
              value={translatedText}
              readOnly
              className="min-h-[100px] bg-muted"
            />
          </div>
        )}
        <Link href="/" passHref>
          <Button variant="outline">Back to Home</Button>
        </Link>
      </main>
    </div>
  )
}