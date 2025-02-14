type Props = {
  content: string
}

export function PostBody({ content }: Props) {
  return (
    <div className="mx-auto max-w-5xl break-words overflow-auto">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
