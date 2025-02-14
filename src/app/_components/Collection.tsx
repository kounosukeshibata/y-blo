import Artifacts from '@/app/_components/Artifacts'

const Collection = () => {
  return (
    <div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-40">
        <Artifacts
          title="y-blo"
          src="/assets/profile/portfoliosite-image.png"
          width={300}
          height={300}
          summary="最初に作成したポートフォリオサイトです"
          textForModal="Next.jsのApp Routerを使用して個人サイトを作成しました。フロントエンドもバックエンドも両方TypeScriptで実装しています。"
        />
        <Artifacts
          title="テトリス"
          src="/assets/profile/yadon-image.png"
          width={800}
          height={700}
          summary="作成中"
          textForModal="モーダル表示テスト"
        />
        <Artifacts
          title="テトリス"
          src="/assets/profile/yadon-image.png"
          width={800}
          height={700}
          summary="作成中"
          textForModal="モーダル表示テスト"
        />
      </div>
    </div>
  )
}

export default Collection
