import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import  "./nav-bar.css"
import { useContext } from 'react'
import { FirebaseContext } from '../../context/FirebaseContext'

 export const NavBar =()=>{
    const {getProductsDB} = useContext (FirebaseContext)
    return (
        <>
        <nav className="navbar">
            <h4>TIENDA APP</h4>
        <ul className="ulflex">
            
        <Link className="lista" to="/">
            <li className="lista">Home</li>
            </Link>
            <li className="lista" onClick={() => getProductsDB("fruta")}>Frutas</li>
            <li className="lista" onClick={() => getProductsDB("verdura")}>Verduras</li>
            
        </ul>
        <Link to="/cart">
            <CartWidget/>
            
            </Link>
        
    </nav>
        </>
    )
}

