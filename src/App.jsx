import React from "react"
import ProductCard from "./components/ProductCard"// App.jsx

function App() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-3 gap-4">
      <ProductCard 
        name="Wireless Headphones" 
        price={99.99} 
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
      />
      <ProductCard 
        name="Smart Watch" 
        price={199.99} 
        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
      />
      <ProductCard 
        name="Laptop Stand" 
        price={49.99} 
        image="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400"
      />
    </div>
  )
}

export default App
