import React, {useState} from "react"
import ProductCard from "./components/ProductCard"// App.jsx

function App() {
  // This will store an array of cart items instead of just a count
  const [cart, setCart] = useState([])

  // Function to add product to cart
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => {
    return sum + (Number(item.price) || 0)
  }, 0)

  console.log("Cart:", cart)
  console.log("Total Price:", totalPrice)

  // Sample product data
  const products = [
    {
      id: 1, 
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
      id: 2, 
      name: "Smart Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
      id: 3, 
      name: "Laptop Stand",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400"
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
    }
  ]
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="bg-blue-500 text-white px-4 py-2 rounded">
          <div className="font-bold">Cart: {cart.length} items</div>
        <div className="text-sm">Total: ${totalPrice.toFixed(2)}</div>
      </div>
      </div>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default App
