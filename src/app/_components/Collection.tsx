import Artifacts from '@/app/_components/Artifacts'

const Collection = () => {
  return (
    <div>
      <div className="lg:flex">
        <Artifacts
          name="y-blo"
          imgsrc="/assets/profile/portfoliosite-image.png"
          width={300}
          height={300}
          summary="最初に作成したポートフォリオサイトです"
        />
        <Artifacts
          name="テトリス"
          imgsrc="/assets/profile/yadon-image.png"
          width={700}
          height={700}
          summary="作成中"
        />
        <Artifacts
          name="テトリス"
          imgsrc="/assets/profile/yadon-image.png"
          width={700}
          height={700}
          summary="作成中"
        />
      </div>
    </div>
  )
}

export default Collection
