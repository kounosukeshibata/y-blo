import Container from '@/app/_components/container'
import { getPostsData, getSortedPostsData } from '@/lib/posts'
import type { Article } from '@/types/Article'
import Link from 'next/link'

const Page = async () => {
  const allPostsData = await getPostsData()
  const sortedPostData: Article[] = getSortedPostsData(allPostsData)
  console.log('ヒーローポストを取得')

  const joinedTopicsPostData = sortedPostData.map((data) =>
    Array.isArray(data.topics)
      ? {
          ...data,
          topics: data.topics.join(', '),
        }
      : {
          ...data,
          topics: data.topics,
        },
  )

  return (
    <main>
      <Container>
        <h1 className="mb-12 mt-10 text-5xl font-bold leading-tight tracking-tighter md:leading-none md:text-5xl lg:text-5xl text-center md:text-left">
          ブログ一覧ページ
        </h1>
        {joinedTopicsPostData ? (
          joinedTopicsPostData.map((article) => {
            return (
              <Link
                href={`/blog/posts/${article.id}`}
                className="hover:underline"
                key={article.id}
              >
                <ul className="my-5">
                  <li>
                    {article.emoji} {article.title}
                  </li>
                  <li>Topics：{article.topics}</li>
                  <li>投稿日：{article.published_at}</li>
                </ul>
              </Link>
            )
          })
        ) : (
          <p>No article.</p>
        )}
      </Container>
    </main>
  )
}

export default Page
