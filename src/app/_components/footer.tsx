import Container from '@/app/_components/container'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:bg-slate-800">
      <Container>
        <div className="flex flex-col items-center py-10 lg:flex-row">
          <h3 className="mb-10 text-4xl font-bold leading-tight tracking-tighter text-center lg:w-1/2 lg:mb-0 lg:text-5xl lg:pr-4 lg:text-left">
            produced by y-blo
          </h3>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:w-1/2 lg:pl-4">
            <a
              href="https://zenn.dev/yadonn"
              className="mx-3 mb-6 flex items-center justify-center border border-black bg-black py-3 px-12 text-white font-bold duration-200 transition-colors hover:bg-white hover:text-black lg:px-8 lg:mb-0"
            >
              Read Zenn
            </a>
            <a
              href="https://github.com/kounosukeshibata/y-blo"
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
