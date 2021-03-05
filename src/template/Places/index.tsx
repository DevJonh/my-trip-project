import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as Styles from './styles'
import { useRouter } from 'next/dist/client/router'
import { NextSeo } from 'next-seo'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={`${
          place.description?.text ||
          'A simple project started to show my favorite spots in Brazil.'
        }`}
        canonical={`https//my-trips.devjhonny.com/place/${place.slug}`}
        openGraph={{
          url: 'https://mytrips.com',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'A simple project started to show my favorite spots in Brazil.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <Styles.Wrapper>
        <Styles.Content>
          <LinkWrapper href="/">
            <CloseOutline size={32} aria-label="Home" />
          </LinkWrapper>
          <Styles.Heading>{place.name}</Styles.Heading>
          <Styles.Body>
            <div
              dangerouslySetInnerHTML={{
                __html: place.description?.html || ''
              }}
            />
          </Styles.Body>

          <Styles.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                width={1000}
                height={600}
                quality={75}
                src={image.url}
                alt={place.name}
              />
            ))}
          </Styles.Gallery>
        </Styles.Content>
      </Styles.Wrapper>
    </>
  )
}

export default PlacesTemplate
