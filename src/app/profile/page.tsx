import Container from '@/app/_components/container'
import GithubContributions from '@/app/_components/GithubContributions'
import SelfIntroduction from '@/app/_components/SelfIntroduction'

const Page = () => {
  return (
    <Container>
      <h1 className="mt-10 text-5xl font-mono leading-tight tracking-tighter md:leading-none md:text-5xl lg:text-5xl text-center">
        プロフィール
      </h1>
      <SelfIntroduction />
      <GithubContributions />
      {/* <Career /> */}
    </Container>
  )
}

export default Page
