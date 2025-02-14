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
        <h1 className="mb-12 mt-10 xl:mx-20 text-5xl font-mono leading-tight tracking-tighter md:leading-none md:text-5xl lg:text-5xl text-center">
          ブログ一覧
        </h1>
        <div className="grid grid-col sm:grid-cols-2 lg:grid-cols-3 xl:mx-20">
          {sortedPostData ? (
            sortedPostData.map((article) => {
              return (
                <div
                  key={article.id}
                  className="mx-10 sm:mx-5 px-5 my-5 sm:my-5 xl:mx-5 bg-sky-500/20 rounded-xl"
                >
                  <Link
                    href={`/blog/posts/${article.id}`}
                    className="hover:underline"
                  >
                    <ul className="my-2 flex flex-col h-full">
                      <li className="mt-2 mb-4 px-3 py-2 bg-white rounded-xl">
                        {article.emoji} {article.title}
                      </li>
                      <li className="flex flex-wrap py-2">
                        キーワード：
                        {article.topics.map((topic, index) => {
                          return (
                            <div
                              key={index}
                              className="my-0.5 mx-0.5 px-2 bg-blue-900 text-white rounded-xl"
                            >
                              {topic}
                            </div>
                          )
                        })}
                      </li>
                      <li className="py-2 mt-auto mb-3 self-end">
                        投稿日：{article.published_at}
                      </li>
                    </ul>
                  </Link>
                </div>
              )
            })
          ) : (
            <p>No article.</p>
          )}
        </div>
      </Container>
    </main>
  )
}

export default Page
