
import { useState } from "react";
import "./item-count.css"

export const ItemCount = ({initial = 0, max}) => {

  const [count, setCount] = useState(initial);

  const increment = () => {
    if(count === max) {
      return setCount(count);
    }
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };
  return (
    <div className="boton-contador">
      <button className="buton-suma" onClick={increment}>+</button>
      <strong className="count-suma">{count}</strong>
      <button className="buton-suma" onClick={decrement}>-</button>
    </div>
  );
};

