import Container from '@/app/_components/container'
import MailContact from '@/app/_components/MailContact'

const Page = () => {
  return (
    <Container>
      <div className="flex grow flex-col items-center justify-center space-y-4">
        <h1 className="mt-10 sm:mt-20 mb-5 sm:mb-10 p-1 text-4xl font-mono">
          お問い合わせ
        </h1>
        <MailContact />
        {/* <OthersContact /> */}
      </div>
    </Container>
  )
}

export default Page
