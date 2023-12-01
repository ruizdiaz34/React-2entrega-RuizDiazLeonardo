import { useEffect, useState } from "react";
import { getProductById } from "../../productosMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect( () => { 
      getProductById(id)
        .then(response => setItem(response))
        .catch(error => console.log(error));
        
     }, [])
  return (
    <>
    {item && <ItemDetail {...item} />}
    </>
  )
}
  

