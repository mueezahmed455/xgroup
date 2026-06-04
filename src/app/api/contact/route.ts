import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  company: z.string().max(100).optional().default(''),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  useCase: z.string().max(100).optional().default(''),
})

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { name, company, email, message, useCase } = parsed.data
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      const { Resend } = await import('resend')
      const resend = new Resend(resendApiKey)
      await resend.emails.send({
        from: 'X.Group Website <noreply@xgroup.io>',
        to: 'hello@xgroup.io',
        subject: 'New contact from ' + escapeHtml(name) + (company ? ' at ' + escapeHtml(company) : ''),
        html: '<h2>New Contact</h2><p><strong>Name:</strong> ' + escapeHtml(name) + '</p><p><strong>Company:</strong> ' + escapeHtml(company || 'N/A') + '</p><p><strong>Email:</strong> ' + escapeHtml(email) + '</p><p><strong>Use Case:</strong> ' + escapeHtml(useCase || 'N/A') + '</p><p><strong>Message:</strong></p><p>' + escapeHtml(message) + '</p>',
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
