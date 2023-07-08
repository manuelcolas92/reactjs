import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity +1)
        }
    }
    
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity -1)
        }
    }
    
    
    return (
        <div className='counter'>
            <div className='counter-controls'>
                <button className='counter-controls-button' onClick={decrement}>-</button>
                <h4 className='counter-controls-quantity'>{quantity}</h4>
                <button className='counter-controls-button' onClick={increment}>+</button>
            </div>
            <div className='counter-add'>
                <button className='counter-add-button' onClick={() => onAdd(quantity)} disabled={!stock}>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
