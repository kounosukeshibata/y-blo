'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { init, send } from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: '2文字以上で入力してください' })
    .max(10, { message: '10文字以下で入力してください' }),
  email: z.string().email({ message: 'メールアドレスの形式ではありません' }),
  subject: z.string().min(1, { message: 'タイトルの内容は入力必須です。' }),
  content: z.string().min(1, { message: 'お問い合わせ内容は入力必須です。' }),
})

type formType = z.infer<typeof formSchema>

const MailContact = () => {
  const [isSending, setIsSending] = useState(false)

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      content: '',
    },
  })

  const onSubmit: SubmitHandler<formType> = async (data: formType) => {
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    // フォームの送信イベントで送ったデータ
    const { name, email, subject, content } = data

    if (userId && serviceId && templateId) {
      //送信処理開始
      setIsSending(true)
      const loadingToast = toast.loading('送信中...')
      //emailjsを初期化
      init(userId)

      //送信データを定義する
      const params = {
        name: name,
        email: email,
        subject: subject,
        content: content,
      }

      //EmailJSに送信する
      try {
        await send(serviceId, templateId, params)
        toast.success('送信が成功しました。')
      } catch {
        toast.error('送信に失敗しました。')
      } finally {
        form.reset()
        toast.dismiss(loadingToast)
        // 送信処理修了
        setIsSending(false)
      }
    }
  }

  // const router = useRouter()
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [subject, setSubject] = useState('')
  // const [message, setMessage] = useState('')

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   const res = await fetch('/api/email', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json, text/plain',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, email, subject, message }),
  //   })

  //   if (res.status === 200) {
  //     console.log('メール送信成功')
  //     setName('')
  //     setEmail('')
  //     setSubject('')
  //     setMessage('')
  //     router.push('/contact')
  //   } else {
  //     console.error('メール送信に失敗しました')
  //   }
  // }

  return (
    <div className="container bg-gray-100 lg:w-[80%] px-5 sm:px-10 lg:px-20 xl:px-40">
      <div className="container pt-20 pb-20 lg:pb-40 flex items-center">
        <div className="lg:w-[90%] w-full mx-auto">
          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>名前</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="y-blo"
                        {...field}
                        disabled={isSending}
                      />
                    </FormControl>
                    <FormDescription>お名前をお書きください。</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>メールアドレス</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        {...field}
                        disabled={isSending}
                      />
                    </FormControl>
                    <FormDescription>
                      メールアドレスをお書きください。
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>件名</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="件名"
                        {...field}
                        disabled={isSending}
                      />
                    </FormControl>
                    <FormDescription>件名をお書きください。</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>お問い合わせ内容</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="メッセージ"
                        {...field}
                        className="resize-none h-[200px]"
                        disabled={isSending}
                      />
                    </FormControl>
                    <FormDescription>
                      お問い合わせ内容をお書きください。
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="bg-gray-600 text-white">送信</Button>
            </form>
          </Form>
          {/* <form onSubmit={handleSubmit} className="space-y-10">
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
          className="w-16 h-8 text-white bg-gray-700 rounded-lg transition-transform transform active:scale-95 active:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          送信
        </button>
      </form> */}
        </div>
      </div>
    </div>
  )
}

export default MailContact
