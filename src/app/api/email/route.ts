import { NextResponse, type NextRequest } from 'next/server'
import nodemailer from 'nodemailer'
import type Mail from 'nodemailer/lib/mailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    })

    await transport.verify()

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

    await transport.sendMail(mailData)

    return NextResponse.json({ status: 'OK' }, { status: 200 })
  } catch (error) {
    let errorMessage = 'Unknown error occurred'
    if (error instanceof Error) {
      errorMessage = error.message
    }
    console.error('メール送信エラー:', error)
    return NextResponse.json(
      { status: 'ERROR', message: errorMessage },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json('テスト')
}
