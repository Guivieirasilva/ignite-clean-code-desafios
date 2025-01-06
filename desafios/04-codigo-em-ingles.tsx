// Código em inglês 
import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ListProducts() {
  const [filteredProdutos, setFilteredProdutos] = useState<Product[]>([])

  function searchProducts(search: string) {
    const productsResearched = productList.filter(product => product.title.includes(search))

    setFilteredProdutos(productsResearched)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProducts(e.target.value)} />

      {filteredProdutos.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}


