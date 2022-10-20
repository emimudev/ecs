import Slick, { SlickItem } from 'components/Slick'
import ProductCard from 'components/ProductCard'

const Product = {
  name: 'Corolla',
  year: '2022',
  brand: 'Toyota',
  price: 20000,
  discountPercentage: 10
}

function FeaturedPosts() {
  return (
    <Slick>
      {new Array(15).fill(Product).map((element, i) => (
        <SlickItem key={i}>
          <ProductCard title={i} {...element} />
        </SlickItem>
      ))}
    </Slick>
  )
}

export default FeaturedPosts
