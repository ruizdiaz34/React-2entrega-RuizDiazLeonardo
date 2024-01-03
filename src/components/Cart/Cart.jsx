
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart-style.css"

export const Cart = () => {

  const { cartItems, totalCartItems, removeItem } = useContext( CartContext);
  return (
    <div>
      <h2 className="h2-carrito">Carrito</h2>
      <div className="cart">
      {cartItems.map((item) => (
          <div className="cart-conten" key={item.id}>
            <img className="cart-img" src= {item.img} />
            <h3>{item.name} </h3>
            <h3>{item.quantity} </h3>{}
            <h3>Precio Unitario: {item.price} </h3>
            <h3>Subtotal: {item.subTotal}</h3>
            
            <button  onClick={() => removeItem(item.id)}>
              Eliminar
            </button>
          </div>))}
      <h4 className="suma-total">Suma total del carrito ${totalCartItems} </h4>
      </div>
    </div>
  ) };




