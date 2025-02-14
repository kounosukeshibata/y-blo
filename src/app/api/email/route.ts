import { NextResponse, type NextRequest } from 'next/server'
import nodemailer from 'nodemailer'
import type Mail from 'nodemailer/lib/mailer'

export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json()

  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  })

  const mailData: Mail.Options = {
    from: email,
    to: process.env.NODEMAILER_EMAIL,
    subject: `【y-bloへのお問合せ】${name}様より`,
    text: `「${subject} 」send from ${email}`,
    html: `
      <p>【名前】</p>
      <p>${name}</p>
      <p>【タイトル】</p>
      <p>${subject}</p>
      <p>【メッセージ内容】</p>
      <p>${message}</p>
      <p>【メールアドレス】</p>
      <p>${email}</p>
    `,
  }

  try {
    await transport.sendMail(mailData)
    return NextResponse.json({ message: 'Success!', status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Failed!', status: 500 })
  }
}

export async function GET() {
  return NextResponse.json('テスト')
}
