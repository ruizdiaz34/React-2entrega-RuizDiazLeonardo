
import { Item } from "../Item/Item"
import "./item-list.css"


export const Itemlist = ({products}) => {
  return (
    <>
    <div className="cards-container">
    {products.map( product => <Item key={product.id} {...product}  />)}
        
    </div>
    </>
  )
}
