import { useContext, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../context/CartContext";


const ItemCountCart = ({product}) => {
  const { productsCart, editCounterInCart } = useContext(CartContext);
  const [count, setCount] = useState(product.cantidad);
  useEffect(()=> {
    editCounterInCart(product, count);
  }, [count])
  
  const operationCount = (operation) => {
    if (operation === 'rest' && count <= 1) {
        setCount(1);
    } else if (operation === 'rest' && count > 1) {
        setCount(count - 1);
    } else {
        setCount(count + 1);
    }
  }

  return (
    <div className="item-count-cart">
        <div className="count">
            <button onClick={() => operationCount('rest')} className="btn-count">-</button>
             <input className="input-count"  disabled type="text" value={count} onChange={e => setCount(e.target.value)} />
             <button onClick={() => operationCount('sum')} className="btn-count">+</button>
        </div>
    </div>
  )
}

export default ItemCountCart