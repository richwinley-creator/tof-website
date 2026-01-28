import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key (set in environment variables)
const resend = new Resend(process.env.RESEND_API_KEY)

// In production, this would come from Supabase
const getMemberEmails = () => {
  // Sample member emails - replace with actual database query
  return [
    // Add real member emails here or fetch from Supabase
    // 'member1@email.com',
    // 'member2@email.com',
  ]
}

export async function POST(request: Request) {
  try {
    const { title, content, sendEmail } = await request.json()

    if (!sendEmail) {
      return NextResponse.json({ success: true, emailSent: false })
    }

    const memberEmails = getMemberEmails()

    if (memberEmails.length === 0) {
      return NextResponse.json({
        success: true,
        emailSent: false,
        message: 'No member emails configured'
      })
    }

    // Send email to all members
    const { data, error } = await resend.emails.send({
      from: 'Tournament of Friends <noreply@tofblackjacket.com>',
      to: memberEmails,
      subject: `TOF Update: ${title}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1A1A1A; padding: 20px; text-align: center;">
            <h1 style="color: #C8A951; margin: 0; font-size: 24px;">Tournament of Friends</h1>
            <p style="color: #888; margin: 5px 0 0 0; font-size: 12px;">EST. 2015</p>
          </div>

          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #1A1A1A; margin-top: 0;">${title}</h2>
            <div style="color: #333; line-height: 1.6; white-space: pre-wrap;">${content}</div>
          </div>

          <div style="background: #f5f5f5; padding: 20px; text-align: center; font-size: 14px; color: #666;">
            <p style="margin: 0;">Visit <a href="https://tofblackjacket.com" style="color: #C8A951;">tofblackjacket.com</a> for more details</p>
            <p style="margin: 10px 0 0 0; font-size: 12px;">Where brotherhood is forged on the fairway</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Email error:', error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, emailSent: true, data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}
