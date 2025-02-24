import Artifacts from '@/app/_components/Artifacts'

const Collection = () => {
  return (
    <div>
      <div className="m-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Artifacts
          title="y-blo"
          src="/assets/profile/portfoliosite-image.png"
          width={270}
          height={200}
          summary="ポートフォリオサイトです。最初に作成しました。"
          textForModal="Next.jsのApp Routerを使用して個人サイトを作成しました。フロントエンドもバックエンドも両方TypeScriptで実装しています。デプロイはVercelを使用しています。"
          url="https://y-blo.vercel.app/"
        />
        <Artifacts
          title="テトリス"
          src="/assets/works/works-tetoris.png"
          width={120}
          height={200}
          summary="Webで遊べる初めて作成したゲームです。スマホでも遊べます。"
          textForModal="勉強のためにReactとTypeScriptを使用して作成し、GitHub Pagesでデプロイしました。"
          url="https://kounosukeshibata.github.io/react-ts-tetoris/"
        />
        <Artifacts
          title="未完成の作品"
          src="/assets/profile/yadon-image.png"
          width={270}
          height={200}
          summary="作成中"
          textForModal="モーダル表示テスト"
          url="https://y-blo.vercel.app/"
        />
      </div>
    </div>
  )
}

export default Collection
