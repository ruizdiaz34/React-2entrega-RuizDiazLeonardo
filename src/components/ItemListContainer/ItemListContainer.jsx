import { useEffect, useState } from "react"
import { getProducts } from "../../productosMock"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./item-list-container.css"

export const ItemListContainer = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [products, setProducts] = useState([]);

  useEffect( ()=> {
    getProducts()
    .then((response)=>{
      setIsLoading(!isLoading);
      setProducts(response);
    }) 
    .catch((error)=> console.log(error));
  },[]);

  return (
    <>
    
    <h2 className="h2-productos">Productos</h2>
    <div className="cards-container">
    {
      isLoading ? <h2>Cargando los productos..</h2> :
     products.map( product => 
   <ItemDetail key={product.id} img={product.img} name={product.name} description={product.description} price={product.price} stock={product.stock} />
   )}
   </div> 
    </>
   
  )
}
