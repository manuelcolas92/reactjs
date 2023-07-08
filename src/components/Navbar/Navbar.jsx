import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'
import ButtonMenu from '../ButtonMenu/ButtonMenu'

import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = () => {
    return (
        <header className='navbar'>
            <div className='navbar-start'>
                <Logo />
            </div>
            <div className='navbar-center'>
                <SearchBar />
                <ButtonMenu />
            </div>
            <div className='navbar-end'>    
                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar