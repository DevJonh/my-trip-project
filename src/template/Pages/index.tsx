import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as Styles from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PagesTemplate = ({ heading, body }: PageTemplateProps) => {
  return (
    <Styles.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Home" />
      </LinkWrapper>
      <Styles.Heading>{heading}</Styles.Heading>
      <Styles.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Styles.Body>
    </Styles.Content>
  )
}

export default PagesTemplate
