import { useEffect, useState } from "react"
import { getProducts } from "../../productosMock"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./item-list-container.css"

export const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect( ()=> {
    getProducts()
    .then((response)=> setProducts(response))
    .catch((error)=> console.log(error));
  },[]);

  return (
    <>
    <h2>Productos</h2>
    <div className="cards-container">
    { products.map( product => 
   <ItemDetail key={product.id} img={product.img} name={product.name} description={product.description}/>
   )}

      </div> 
  
    </>
   
  )
}
