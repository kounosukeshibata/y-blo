import Container from '@/app/_components/container'
import { HeroPost } from '@/app/_components/hero-post'
import { getPostsData, getSortedPostsData } from '@/lib/posts'
import type { Article } from '@/types/Article'

export default async function Index() {
  console.log('/page.tsx')
  const allPostsData = await getPostsData()
  const sortedPostData: Article[] = await getSortedPostsData(allPostsData)
  const heroPost = sortedPostData[0]
  const topicsDisplay = Array.isArray(heroPost.topics)
    ? heroPost.topics.join(', ')
    : heroPost.topics

  return (
    <main>
      <Container>
        {heroPost ? (
          <HeroPost
            key={heroPost.id}
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
