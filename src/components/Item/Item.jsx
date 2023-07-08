import './Item.css'
import { Link, useNavigate } from 'react-router-dom'

const Item = ({ id, name, img, price, stock, description }) => {

    const navigate = useNavigate()

    return (
        <article className='card' onClick={() => navigate(`/item/${id}`)}>
            <picture className='card-picture'>
                <img src={img} alt={name} className='card-img' />
            </picture>
            <section className='card-section'>
                <h4 className='card-name'>
                    {name}
                </h4>
                <p className='card-description'>{description}</p>
                <p className='card-price'>
                    ${price}
                </p>
            </section>
        </article>
    )
}

export default Item