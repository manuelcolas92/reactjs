import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (

        <Link to={"/"} className='homeLink'>
        <div className='logo'>
            <h2 className='logo-title'>Dexter's Petshop</h2>
            <span className='logo-slogan'>Todo para tu gato!</span>
        </div>
        </Link>
    )
}

export default Logo