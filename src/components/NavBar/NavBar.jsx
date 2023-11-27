import { CartWidget } from '../CartWidget/CartWidget'
import './nav-bar.css'

 export const NavBar =()=>{
    return (
        <>
        <nav className='navbar'>
            <h4>TIENDA APP</h4>
        <ul className='ulflex'>
            <li className='lista'><a href="#"></a>Home</li>
            <li className='lista'><a href="#"></a>Frutas</li>
            <li className='lista'><a href="#"></a>Verduras</li>
        </ul>
        <CartWidget/>
    </nav>
        </>
    )
}

