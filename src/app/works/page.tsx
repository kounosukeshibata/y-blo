import Collection from '@/app/_components/Collection'
import Container from '@/app/_components/container'

const Page = () => {
  return (
    <Container>
      <h1 className="mb-12 mt-10 text-5xl font-mono leading-tight tracking-tighter md:leading-none md:text-5xl lg:text-5xl text-center">
        作品一覧
      </h1>
      <Collection />
    </Container>
  )
}

export default Page
