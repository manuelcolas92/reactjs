import './ButtonMenu.css'
import { Link } from 'react-router-dom'

const ButtonMenu = () => {
    return (
            <>
            <div className='button'>
            <Link to={'/category/alimento'}><button className='button-menu'><span></span>Alimento</button></Link>
            <Link to={'/category/sanitario'}><button className='button-menu'><span></span>Sanitario</button></Link>
            <Link to={'/category/juguetes'}><button className='button-menu'><span></span>Juguetes</button></Link>
            <Link to={'/category/descanso'}><button className='button-menu'><span></span>Descanso</button></Link>
            </div>
            </>
    )
}

export default ButtonMenu