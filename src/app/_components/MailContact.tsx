'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const MailContact = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await fetch('/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    }).then((res) => {
      if (res.status === 200) console.log('メール送信成功')
    })
  }

  return (
    <div>
      <h2>お問い合わせ</h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        <div>
          <label>お名前:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>メールアドレス:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>タイトル:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>メッセージ:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" onClick={() => router.push('/')}>
          送信
        </button>
      </form>
    </div>
  )
}

export default MailContact
