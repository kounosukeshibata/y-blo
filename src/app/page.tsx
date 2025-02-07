import Container from '@/app/_components/container'
import { HeroPost } from '@/app/_components/hero-post'
import { getPostsData, getSortedPostsData } from '@/lib/posts'
import { Article } from '@/types/Article'

export default async function Index() {
  const allPostsData = await getPostsData()
  const sortedPostData: Article[] = getSortedPostsData(allPostsData)
  const heroPost = sortedPostData[0]
  console.log('ヒーローポストを取得')

  const topicsDisplay = Array.isArray(heroPost.topics)
    ? heroPost.topics.join(', ')
    : heroPost.topics

  return (
    <main>
      <Container>
        {heroPost ? (
          <HeroPost
            id={heroPost.id}
            title={heroPost.title}
            emoji={heroPost.emoji}
            topics={topicsDisplay}
            published_at={heroPost.published_at}
          />
        ) : (
          <p>No hero post available.</p>
        )}
      </Container>
    </main>
  )
}
