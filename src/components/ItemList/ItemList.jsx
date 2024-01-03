
import { Item } from "../Item/Item"
import "./item-list.css"
import { FirebaseContext } from "../../context/FirebaseContext";
import { useContext } from "react";

export const Itemlist = () => {

  const { products } = useContext(FirebaseContext);
  return (
    <>
    <div className="cards-container">
    {products.map( product => <Item key={product.id} {...product}  />)}
        
    </div>
    </>
  )
};
