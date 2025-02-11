import Container from '@/app/_components/container'
import MailContact from '@/app/_components/MailContact'
import OthersContact from '@/app/_components/OthersContact'

const Page = () => {
  return (
    <Container>
      <h1>お問い合わせ用ページ</h1>
      <MailContact />
      <OthersContact />
    </Container>
  )
}

export default Page
