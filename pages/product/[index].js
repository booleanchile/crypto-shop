import * as React from 'react'
import SingleImage from '../../components/SingleImage'
import { getProducts } from '../../services/products'
const Page = ({index}) => {
  return <SingleImage index={index} />
}

export async function getStaticProps({ params }) {
  const { index } = params
  return {
    props: {
      index
    },
  }
}

export async function getStaticPaths() {
  const products = await getProducts()
  return {
    paths: products.map((product) => {
      return {
        params: {
          index: `${product._id}`,
        },
      }
    }),
    fallback: false,
  }
}

export default Page
