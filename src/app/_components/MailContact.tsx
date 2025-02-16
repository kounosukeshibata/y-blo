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
import { type SubmitHandler, useForm } from 'react-hook-form'
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
        name,
        email,
        subject,
        content,
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
                    <FormMessage className="text-red-500" />
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
                    <FormMessage className="text-red-500" />
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
                    <FormMessage className="text-red-500" />
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
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <Button className="bg-gray-600 text-white">送信</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default MailContact
