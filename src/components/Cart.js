import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);
  return (
    <div>
      <ul>{cartItems.map((item) => (
        <li>{item.card.info.name}</li>
      ))}</ul>
    </div>
  )
}

export default Cart
