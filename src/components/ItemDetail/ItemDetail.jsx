import { ItemCount } from "../ItemCount/ItemCount"
import "./item-detail.css"


export const ItemDetail = ({img, name, price, description, stock}) => {
  return (
    <>
    <div className="cards-container">
        <div className="cards">
        <img className="cards-img" src={img} />   
        <h3>{name}</h3>
        <h5>{description}</h5>
        <h4>${price}</h4>
        <ItemCount max={stock}/>
        <button className="boton-agregar">agregar</button>
        </div>
        <div>
        
        </div>
    </div>
    </>
  )
}
