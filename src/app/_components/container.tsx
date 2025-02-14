type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto mb-20 px-5">{children}</div>
}

export default Container
