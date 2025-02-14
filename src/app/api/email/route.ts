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

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transport.verify(function (error, success) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log('Server is ready to take our messages')
        resolve(success)
      }
    })
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

  await new Promise((resolve, reject) => {
    transport.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        console.log(info)
        resolve(info)
      }
    })
  })

  return NextResponse.json({ status: 'OK' }, { status: 200 })
}

export async function GET() {
  return NextResponse.json('テスト')
}
