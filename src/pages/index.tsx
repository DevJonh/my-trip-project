import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/querys'
import { GetPlacesQuery } from 'graphql/generated/graphql'

import HomeTemplate from 'template/Home'

const Home = ({ places }: MapProps) => {
  return <HomeTemplate places={places} />
}

export default Home

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 5,
    props: {
      places
    }
  }
}
