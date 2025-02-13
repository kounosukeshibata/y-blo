import Container from '@/app/_components/container'
import GithubContributions from '@/app/_components/GithubContributions'
import SelfIntroduction from '@/app/_components/SelfIntroduction'

const Page = () => {
  return (
    <Container>
      <SelfIntroduction />
      <GithubContributions />
      {/* <Career /> */}
    </Container>
  )
}

export default Page
