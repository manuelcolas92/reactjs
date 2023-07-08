import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

// EL DISPLAY DEL WIDGET LO DEJE SIEMPRE VISIBLE PARA QUE EL MENU DE LA NAVBAR ME QUEDE SIEMPRE CENTRADO Y QUE SI NO HAY PRODUCTOS EL USUARIO LO TENGA SIEMPRE PRESENTE
// DE TODAS FORMAS DEJO LA LOGICA ARMADA PARA EN CUALQUIER MOMENTO SI QUISIERA PODER CAMBIARLO A "NO VISIBLE" CUANDO "totalQuantity > 0"

    return (
        <Link to='cart' className='cart-widget-link' style={{ display: totalQuantity >= 0 ? 'block' : 'none'}}>
            <div className='cart-widget-ico'>
            <FontAwesomeIcon icon={faCartShopping} />
            { totalQuantity }
            </div>
        </Link>
    )}

export default CartWidget