import React, {useState} from "react"
import ProductCard from "./components/ProductCard"// App.jsx

function App() {
  // This will store an array of cart items instead of just a count
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false) // Track if cart is open

  // Function to add product to cart
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  // Toggle cart open/close
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  // Remove item from cart by index
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index)
    setCart(newCart)
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
        <button
        onClick={toggleCart}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          🛒Cart: {cart.length} - ${totalPrice.toFixed(0)}
          </button>
        </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {/* Cart Sidebar - Only shows when isCartOpen is true */}
      {isCartOpen && (
        <div className="fixed right-0 stop-0 h-full w-96 bg-white shadow-2xl p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shopping cart</h2>
          <button 
          onClick={toggleCart} className="text-2xl hover:text-red-500">
            X
          </button>
        </div>

        {/* Show message if cart is empty */}
        {cart.lenth === 0? (
          <p className="text-gray-500">Your cart is empty</p> ) : (
            <>
            {/* List all cart items</> */}
            <div className="space-y-4 mb-6">
              {cart.map((item, index) => (
                <div key={index} className="border p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="font-bold">{item.price}</p>
                    </div>                    <button 
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                </div>
              ))}
            </div>

              {/* Total Price */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}  </span>
                </div>
                <button className="w-full bg-green-500 text-white py-3 rounded-lg mt-4 hover:bg-green-600">Checkout</button>
              </div>
              </>
        )}
    </div>
      )}
    </div>
  )
}

export default App
