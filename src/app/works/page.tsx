import Collection from '@/app/_components/Collection'
import Container from '@/app/_components/container'

const Page = () => {
  return (
    <Container>
      <h1 className="mb-12 mt-10 text-5xl font-bold leading-tight tracking-tighter md:leading-none md:text-5xl lg:text-5xl text-center md:text-left">
        作品一覧ページ
      </h1>
      <Collection />
    </Container>
  )
}

export default Page
