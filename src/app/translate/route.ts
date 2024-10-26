import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Log the raw request body for debugging
    const rawBody = await request.text()
    console.log('Raw request body:', rawBody)

    let body
    try {
      body = JSON.parse(rawBody)
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError)
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 })
    }

    const { text } = body

    if (typeof text !== 'string') {
      return NextResponse.json({ error: 'Invalid or missing text in request body' }, { status: 400 })
    }

    // Here you would typically call your actual translation service
    // For this example, we're just echoing the text back
    const result = `Translated: ${text}`

    return NextResponse.json({ result })
  } catch (error) {
    console.error('Error in translate API:', error)
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 })
  }  
}