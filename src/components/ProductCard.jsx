import React from 'react';

const ProductCard = ({name, price, image}) => {
  return (
    <div className='border p-4 rounded-lg'>
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-green-600 text-lg">${price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600">Add to Cart</button>
      
    </div>
  )
}

export default ProductCard
