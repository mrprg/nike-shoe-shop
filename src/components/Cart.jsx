import React from 'react'
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';

const Cart = () => {
  return (
    <>
      <div>
        <div>
          <CartCount />
          <CartEmpty />
          <CartItem />
        </div>
      </div>
    </>
  )
}

export default Cart;