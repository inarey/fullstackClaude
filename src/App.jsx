import React, { useState } from "react";
import ProductCard from "./components/ProductCard"; // App.jsx

function App() {
  // This will store an array of cart items instead of just a count
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Track if cart is open
  const [searchTerm, setSearchTerm] = useState(""); // Track search input

  // Function to add product to cart
  const addToCart = (product, quantity) => {
    // check if product already exists in cart
    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id,
    );

    if (existingIndex !== -1) {
      //product exists - update quantity
      const newCart = [...cart];
      newCart[existingIndex].quantity += quantity;
      setCart(newCart);
    } else {
      // new product - add with quantity
      setCart([...cart, { product, quantity }]);
    }
  };

  // Toggle cart open/close
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Remove item from cart by index
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => {
    return sum + (Number(item.product.price) * item.quantity || 0);
  }, 0);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto py-10">
      {/* Header with search bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <button
          onClick={toggleCart}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          🛒Cart: {totalItems} - ${totalPrice.toFixed(2)}
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-4 border-2 border-gray-300rounded-lg focus:outline-none focus:border-blue-500 mb-4"
        />
        {searchTerm && (
          <p className="text-gray-600 mt-2">
            Found {filteredProducts.length} products(s) matching "{searchTerm}"
          </p>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))
        ) : (
          <div className="col-span-3 text-center py-12 text-gray-500">
            No products found matching "{searchTerm}"
          </div>
        )}
      </div>

      {/* Cart Sidebar - Only shows when isCartOpen is true */}
      {isCartOpen && (
        <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Shopping cart</h2>
            <button
              onClick={toggleCart}
              className="text-2xl hover:text-red-500"
            >
              X
            </button>
          </div>

          {/* Show message if cart is empty */}
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <>
              {/* List all cart items</> */}
              {cart.map((item, index) => (
                <div key={index} className="border p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">{item.product.name}</h3>
                    <p className="font-bold">{item.product.price}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Total Price */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)} </span>
                </div>
                <button className="w-full bg-green-500 text-white py-3 rounded-lg mt-4 hover:bg-green-600">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
