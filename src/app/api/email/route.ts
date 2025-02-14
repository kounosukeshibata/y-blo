import { NextResponse, type NextRequest } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export async function POST(request: NextRequest) {
  const { email, message } = await request.json()

  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  })

  const mailOption: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: `Message from お問い合わせ(${email})`,
    text: message,
  }

  try {
    await transport.sendMail(mailOption)
    return NextResponse.json({ message: 'Success!', status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Failed!', status: 500 })
  }
}

export async function GET() {
  return NextResponse.json('テスト')
}
