import { NextResponse } from 'next/server'

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL

export async function POST(request: Request) {
  if (!DISCORD_WEBHOOK_URL) {
    return NextResponse.json(
      { error: 'Webhook URL not configured. Please set the DISCORD_WEBHOOK_URL environment variable.' }, 
      { status: 500 }
    )
  }

  try {
    const { embed } = await request.json()

    // Remove thumbnail if URL is not from Discord CDN
    if (embed.thumbnail?.url && !embed.thumbnail.url.startsWith('https://cdn.discordapp.com/')) {
      delete embed.thumbnail
    }

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        embeds: [embed]
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Discord webhook error:', errorText)
      throw new Error(`Discord webhook returned ${response.status}: ${errorText}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending webhook:', error)
    return NextResponse.json(
      { error: 'Failed to submit request. Please check the Discord webhook configuration.' }, 
      { status: 500 }
    )
  }
}
