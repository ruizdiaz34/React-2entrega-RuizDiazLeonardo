
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart-style.css"

export const Cart = () => {

  const { cartItems, totalCartItems, removeItem } = useContext( CartContext);
  console.log(cartItems)
  return (
    <div>
      <h2>Carrito</h2>
      <div className="cards">
          <div key={product.id}>
            <img className="cards-img" src= {product.img} />
            <h3>Nombre: {product.name} </h3>
            <h3>Precio Unitario: {product.price} </h3>
            
            <button >
              Eliminar
            </button>
          </div>
      </div>
      <h4>Suma total del carrito $ </h4>
    </div>
  );
};



/* 
Orden de compra 

collection: "orders"
documents: las ordenes de compra 
document = {
  buyer: { name, phone, email },
  items: {id, name, price, quantity, subTotal},
  date: serverTimestamp();
  total: es el total de la compra
}

*/