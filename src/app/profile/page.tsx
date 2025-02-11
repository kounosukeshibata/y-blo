import Career from '@/app/_components/Career'
import Container from '@/app/_components/container'
import Github from '@/app/_components/Github'
import SelfIntroduction from '@/app/_components/SelfIntroduction'

const Page = () => {
  return (
    <Container>
      <h1>プロフィール用ページ</h1>
      <SelfIntroduction />
      <Github />
      <Career />
    </Container>
  )
}

export default Page
