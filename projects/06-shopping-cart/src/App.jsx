import { useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'

function App() {
  const [products, setProducts] = useState([...initialProducts])
  const [filters, setFilters] = useState({
    category: 'groceries',
    price: 10,
  })

  const filterProducts = (products = []) => {
    return products.filter(product => {
      return (
        product.price >= filters.price &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <h1>App</h1>
      <Products products={filteredProducts} />
    </>
  )
}
export default App
