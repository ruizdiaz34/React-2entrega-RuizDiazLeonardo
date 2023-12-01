import { useEffect, useState } from "react"
import { getProducts } from "../../productosMock"
import "./item-list-container.css"
import { Itemlist } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

  const { category} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect( ()=> {
    setIsLoading(true);
    getProducts()
    .then((response)=>{
      if (category){
        const productsFilter =response.filter((products)=> products.category === category);
        if(productsFilter.length > 0){

          setProducts(productsFilter);
        }
        else{
          setProducts(response);
        }
      } else{
        setProducts(response);
      }
      setIsLoading(false);
      
    }) 
    .catch((error)=> console.log(error));
  },[category]);

  return (
    <>
    <h2 className="h2-productos">Productos</h2> 
     {
      isLoading ? <h2 className="h2-productos">Cargando los productos..</h2> : <Itemlist products={products}/>
   }
    
    </>
    )
}
