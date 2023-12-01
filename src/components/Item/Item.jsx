import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import "./item.css"

export const Item = ({id, img, name, description}) => {
    return (
      <>
      <div>
          <div className="cards">
          <img className="cards-img" src={img} />   
          <h3>{name}</h3>
          <h5>{description}</h5>
          <Link to={`/item/${id}`}>
          <button className="boton-detalle">detalles</button>
          
          </Link>
          
          </div>
          
      </div>
      </>
    )
  }