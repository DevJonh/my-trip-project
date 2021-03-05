import Link from 'next/link'
import * as Styles from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <Styles.Wrapper>
    <Link href={href}>{children}</Link>
  </Styles.Wrapper>
)

export default LinkWrapper
