import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  

  

  return <CartContext.Provider value={cartItems, setCartItems}> {children} </CartContext.Provider>;
};