import CoverImage from '@/app/_components/cover-image'
import { title } from 'process'

const SelfIntroduction = () => {
  return (
    <div className="mb-20 lg:flex">
      <div className="mt-10 mb-10 lg:mt-20 md:ml-20 md:mr-20 lg:flex-none">
        <CoverImage
          title={title}
          src="/assets/profile/yadon-image.png"
          className="w-44 sm:w-60 lg:w-72 h-full mx-auto rounded-full object-cover"
          width={1300}
          height={630}
        />
      </div>
      <div className="mx-5 lg:mt-20 lg:w-96 lg:flex-1 text-xl lg:text-2xl">
        <h3 className="my-4">
          理系の大学院で環境土木について研究し修士号を取得。
        </h3>
        <h3 className="my-4">
          新卒入社した広告代理店の法人営業を4年間経験し、その後未経験でWebエンジニアとして職種を変えました。
        </h3>
        <h3 className="my-4">
          エンジニアとして2年間経過し、業務では主にJavaでバックエンド開発を行なっており、個人開発ではTypeScriptやReactを使ってフロントエンドの開発を行なっています。
        </h3>
        <h3 className="my-4">
          2025年から1児のパパとして働き、スキル向上のために育児の合間に個人サイトを開発しました。
        </h3>
        <h3 className="my-4">
          技術記事の発信や、個人開発の創作物を今後このサイトにアップしていきます。
        </h3>
      </div>
    </div>
  )
}

export default SelfIntroduction
