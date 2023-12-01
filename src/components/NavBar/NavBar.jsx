import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import  "./nav-bar.css"

 export const NavBar =()=>{
    return (
        <>
        <nav className="navbar">
            <h4>TIENDA APP</h4>
        <ul className="ulflex">
            <Link className="lista" to="/">
            <li className="lista">Home</li>
            </Link>
            <Link className="lista" to="/category/fruta">
            <li className="lista">Frutas</li>
            </Link>
            <Link className="lista" to="category/verdura">
            <li className="lista">Verduras</li>
            </Link>
        </ul>
        <Link to="/cart">
            <CartWidget/>
            
            </Link>
        
    </nav>
        </>
    )
}

