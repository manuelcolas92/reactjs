import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className='empty-cart'>
        <h1 className='empty-cart-title'>No hay items en el carrito</h1>
        <Link to='/' className='empty-cart-goproducts'><button className='empty-cart-button'>Ver productos</button></Link>
      </div>
    )

  }

  return (
    <div className='cart-container'>
      {cart.map(p => <CartItem key={p.id} {...p} />)}
      <div className='footer-cart'>
        <p className='total-cart'>El total de su carrito es de ${total}</p>
        <div className='buttons-cart'>
          <Link className='link-checkout' to='/checkout'><button className='button-checkout'>Ir al checkout</button></Link>
          <button className='button-clear' onClick={() => clearCart()}>Limpiar carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
