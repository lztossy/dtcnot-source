import { NextResponse } from 'next/server'

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL_VOTE

export async function POST(request: Request) {
  if (!DISCORD_WEBHOOK_URL) {
    return NextResponse.json({ error: 'Webhook URL not configured' }, { status: 500 })
  }

  const { content } = await request.json()

  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    })

    if (!response.ok) {
      throw new Error('Failed to send webhook')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending webhook:', error)
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
  }
}

