
import { ItemCount } from "../ItemCount/ItemCount"
import "./item-detail.css"

export const ItemDetail = ({img, name, price, description, stock }) => {

  const onAdd = (Items) =>{
    alert(`Se agregaron ${Items} al carrito`)
  }
  return (
    <>
    
      <div className="cards">
        <img className="cards-img" src={img} />
        <h3>{name}</h3>   
        <h5>{description}</h5>
        <ItemCount max={stock} onAdd={onAdd}/>
        <h4>${price}</h4>
        <button className="boton-agregar">Agregar al carrito</button>
      </div>
    
    </>
  )
}
