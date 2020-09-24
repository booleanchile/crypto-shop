import Gallery from '../components/Gallery'
import { getProducts } from '../services/products'

const Index = ({products}) => {

  return (
    <>
      <header>
        <h1>Crypto SHOP</h1>
      </header>
      <main>
        <section>
          <Gallery products={products}/>
        </section>
      </main>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  const products = await getProducts()
  return { products }
}

export default Index
