import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2x1 bg-black text-white py-2 w-80 text-center'>Shopping Everyday</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>Offers, coupons, discounts, and deals. There will 
            come a time when most online merchants will be faced with the decision of whether to offer discounts, when to offer discounts, and how much the discounts should be worth.</p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
           {products.map((item) =>(
            <ProductsCard key={item._id} product = {item}/>
           ))

           }

           
        </div>
    </div>
  )
}

export default Products