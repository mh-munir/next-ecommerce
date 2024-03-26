import React from 'react'
import CartDetails from './CartDetails';

export const metadata ={
    title: 'Shopping Cart'
}

const CartPage = () => {
  return (
    <div className='min-h-[90vh] py-5'>
        <div className='max-w-[1140px] mx-auto'>
            <CartDetails/>
        </div>
    </div>
  )
}

export default CartPage;