import { PostBody } from '@/app/_components/post-body'
import { PostHeader } from '@/app/_components/post-header'
import { getHtmlContent, getPostsData } from '@/lib/posts'
import 'prismjs/themes/prism.css'

const Page = async ({ params }: { params: { id: string } }) => {
  const allPosts = await getPostsData()
  const post = allPosts.find((article) => article.id === params.id)

  if (!post) {
    return <div>Post not found</div>
  }
  const convertedPost = await getHtmlContent(post)

  const { title, topics, published_at, content, emoji } = convertedPost

  return (
    <div>
      <PostHeader title={title} published_at={published_at} emoji={emoji} />
      <PostBody content={content} />
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await getPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default Page
