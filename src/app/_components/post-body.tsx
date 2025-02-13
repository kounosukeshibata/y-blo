type Props = {
  content: string
}

export function PostBody({ content }: Props) {
  return (
    <div className="mx-auto max-w-5xl">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
