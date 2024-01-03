
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useCount } from "../../hooks/useCount";
import "./item-detail.css"



export const ItemDetail = ({ id, img, name, price, description, stock }) => {
  
  const { addItem } = useContext(CartContext);
  const { increment, decrement, count } = useCount(0, stock);

  return (
    <>
    
      <div className="cards">
        <img className="cards-img" src={img} />
        <h3>{name}</h3>   
        <h5>{description}</h5>
      <div className="boton-contador">
          <button className="buton-suma" onClick={increment}>+</button>
          <strong className="count-suma">{count}</strong>
          <button className="buton-suma" onClick={decrement}>-</button>
       </div>
        <h4>${price}</h4>
        <button className="boton-agregar" onClick={()=>addItem( {id, img, name, price}, count)}  >Agregar al carrito</button>
      </div>
    
    </>
  )
}
