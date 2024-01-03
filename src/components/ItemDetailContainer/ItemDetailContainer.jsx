import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { FirebaseContext } from "../../context/FirebaseContext";
import { useContext } from "react";

export const ItemDetailContainer = () => {

  const { product, getProductById } = useContext(FirebaseContext);

  const { id } = useParams();

  useEffect( () => { 
    getProductById(id)
      
      
   }, [])
return (
  <>
   <ItemDetail {...product} />
  </>
)
}

  

