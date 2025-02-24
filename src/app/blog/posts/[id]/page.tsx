import Container from '@/app/_components/container'
import { PostBody } from '@/app/_components/post-body'
import { PostHeader } from '@/app/_components/post-header'
import { getPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import 'zenn-content-css'
import markdownToHtml from 'zenn-markdown-html'

type Params = {
  params: Promise<{
    id: string
  }>
}

const Page = async (props: Params) => {
  const allPosts = await getPostsData()
  const params = await props.params
  const post = allPosts.find((article) => article.id === params.id)

  if (!post) {
    return notFound()
  }

  const { title, published_at } = post
  const convertedContent = await markdownToHtml(post.content || '')

  return (
    <Container>
      <div className="px-6">
        <article className="mb-32 znc">
          <PostHeader title={title} published_at={published_at} />
          <PostBody content={convertedContent} />
        </article>
      </div>
    </Container>
  )
}

export async function generateStaticParams() {
  const posts = await getPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default Page
