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

    const res = await fetch('/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    })

    if (res.status === 200) {
      console.log('メール送信成功')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      router.push('/contact')
    } else {
      console.error('メール送信に失敗しました')
    }
  }

  return (
    <div className="container bg-gray-100 mt-10 py-10 px-5 sm:px-10 lg:px-20 xl:px-40">
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="mb-3">
          <label>お名前 :</label>
          <input
            type="text"
            className="form-control block w-48 sm:w-60"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>メールアドレス :</label>
          <input
            type="email"
            className="form-control block w-72 sm:w-80 md:w-96"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>タイトル :</label>
          <input
            type="text"
            className="form-control block w-72 sm:w-full"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>メッセージ :</label>
          <textarea
            value={message}
            className="form-control block w-72 sm:w-full"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-16 h-8 text-white bg-gray-700 rounded-lg"
        >
          送信
        </button>
      </form>
    </div>
  )
}

export default MailContact
