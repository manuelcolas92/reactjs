import './CartItem.css'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, name, price, quantity, img, description}) => {
  const { removeItem } = useContext(CartContext)
  return (
    <div className="card-cart">
      <div className='card-cart__img-container'>
      <img src={img} alt="imagen del producto" className='img-cart' />
      </div>
      <div className='card-cart__detail-container'>
      <p className='item-cart'>{name}</p>
      <p className='price-cart'>{description}</p>
      <p className='price-cart'>Precio: ${price}</p>
      <p className='quantity-cart'>Cantidad: {quantity}</p>
      <p className='subtotal-cart'>Subtotal: ${price*quantity}</p>
      <button className='delete-button-cart' onClick={() => removeItem(id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem