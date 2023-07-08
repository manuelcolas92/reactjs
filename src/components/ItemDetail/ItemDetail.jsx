import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price, img
        }

        addItem(item, quantity)
    }

    return (
        <article className='card-add-cart'>
            <picture className='card-picture-cart'>
                <img src={img} alt={name} className='card-img-cart' />
            </picture>
            <section className='card-section-cart'>
                <h4 className='card-name-cart'>
                    {name}
                </h4>
                <p className='card-description-cart'>
                    {description}
                </p>
                <p className='card-stock-cart'>
                    Quedan {stock} unidades disponibles
                </p>
                <p className='card-price-cart'>
                    ${price}
                </p>
                <p className='card-terminar-cart'>
                    {
                        quantityAdded > 0 ? (
                            <div className='finalizar-container'>
                                <p className='finalizar-message'>Agregado al carrito!</p>
                                <Link to='/cart'><button className='finalizar-button'>Ir al carrito</button></Link></div>
                            
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)} />
                        )
                    }

                </p>
            </section>
        </article>
    )
}

export default ItemDetail