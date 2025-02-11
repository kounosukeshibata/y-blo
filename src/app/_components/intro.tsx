import { CMS_NAME } from '@/lib/constants'

export function Intro() {
  return (
    <section className="flex items-center flex-col md:flex-row my-16 md:mb-12 md:justify-between">
      <h1 className="text-5xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
        Blog.
      </h1>
      <h4 className="mt-5 text-lg text-center md:text-left md:pl-8">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline transition-colors duration-200 hover:text-blue-600"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4>
    </section>
  )
}
