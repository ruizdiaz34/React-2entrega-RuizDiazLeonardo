
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount"
import "./item-detail.css"

export const ItemDetail = ({ id, img, name, price, description, stock }) => {
  
  const {cartItems,setCartItems} = useContext(CartContext)
 const buyProduct = (product)=>{
  console.log(product);
 }

  return (
    <>
    
      <div className="cards">
        <img className="cards-img" src={img} />
        <h3>{name}</h3>   
        <h5>{description}</h5>
        <ItemCount max={stock}/>
        <h4>${price}</h4>
        <button className="boton-agregar" onClick={()=>buyProduct( product )}  >Agregar al carrito</button>
      </div>
    
    </>
  )
}
