import Container from '@/app/_components/container'
import MailContact from '@/app/_components/MailContact'

const Page = () => {
  return (
    <Container>
      <div className="flex grow flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl">お問い合わせ用ページ</h1>
        <MailContact />
        {/* <OthersContact /> */}
      </div>
    </Container>
  )
}

export default Page
