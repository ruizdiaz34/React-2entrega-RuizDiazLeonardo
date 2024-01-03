import { useEffect, useState } from "react"
import "./item-list-container.css"
import { Itemlist } from "../ItemList/ItemList";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../../context/FirebaseContext";
export const ItemListContainer = () => {

  const {products, isLoading,getProductsDB} = useContext(FirebaseContext);
 
 
  const { category} = useParams();

  useEffect( ()=> {
    getProductsDB()
   
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
