'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const MailContact = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await fetch('/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    }).then((res) => {
      if (res.status === 200) console.log('メース送信成功')
    })

    console.log('お問い合わせ内容を送信完了')
  }

  return (
    <div>
      <h2>お問い合わせ</h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
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
