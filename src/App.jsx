import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import CartList from './components/CartList'

const App = () => {

  const [product, setProduct] = useState([
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2023/2/RD/LE/FP/184929171/bruton-shoes-for-exclusive-trendy-casual-sports-shoes-for-men-running-shoes-for-men-black-red--500x500.jpg",
      name: "TRQ Shoes",
      category: "Shoes",
      seller: "AMZ",
      price: "1999",
    },
    {
      url: "https://importedgear.pk/cdn/shop/files/1686858773689.png?v=1686858725&width=600",
      name: "TRQ Watch",
      category: "Watch",
      seller: "AMZ",
      price: "2599",
    },
    {
      url: "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/HP%20Laptop%20171680104100803309.jpg?impolicy=prdimg&imdensity=1&imwidth=600",
      name: "TRQ Laptop",
      category: "Laptop",
      seller: "AMZ",
      price: "69999",
    },
    {
      url: "https://www.agri-linc.com/media/catalog/product/h/a/ha501951_1.png?optimize=low&bg-color=255,255,255&fit=bounds&height=470&width=600&canvas=600:470&format=jpeg",
      name: "TRQ Security Camera",
      category: "Security Camera",
      seller: "AMZ",
      price: "7999",
    },
    {
      url: "https://doxawatches.com/cdn/shop/files/aquamarine-833412.jpg?v=1717526653&width=1881",
      name: "TRQ Watch",
      category: "Wtach",
      seller: "AMZ",
      price: "13999",
    },
    {
      url: "https://nestasia.in/cdn/shop/files/Greencoffeemugs_1.jpg?v=1699363178&width=600",
      name: "TRQ Mug",
      category: "Mug",
      seller: "AMZ",
      price: "3599",
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length} 
        handleShow={handleShow} />

      {
        showCart ? 
        <CartList cart={cart} />:
        <ProductList product={product} addToCart={addToCart} />
      }
    </div>
  )
}

export default App

