import Container from '@/app/_components/container'
import { getPostsData, getSortedPostsData } from '@/lib/posts'
import { Article } from '@/types/Article'
import Link from 'next/link'

const Page = async () => {
  const allPostsData = await getPostsData()
  const sortedPostData: Article[] = getSortedPostsData(allPostsData)
  console.log('ヒーローポストを取得')

  return (
    <main>
      <Container>
        <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          ブログ一覧ページ
        </h1>
        {sortedPostData ? (
          sortedPostData.map((article) => {
            return (
              <Link
                href={`/blog/posts/${article.id}`}
                className="hover:underline"
              >
                <ul>
                  <li>{article.emoji}</li>
                  <li>{article.title}</li>
                  <li>{article.topics}</li>
                  <li>{article.published_at}</li>
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
