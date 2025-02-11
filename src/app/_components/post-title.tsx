import type { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export function PostTitle({ children }: Props) {
  return (
    <h1 className="mb-12 text-5xl font-bold leading-tight tracking-tighter md:text-5xl md:leading-none text-center md:text-left">
      {children}
    </h1>
  )
}
