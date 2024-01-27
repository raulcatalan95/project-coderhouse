import { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../context/CartContext";


const ItemCount = ({productDetail}) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);
  
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
    <div className="item-count">
        <div className="count">
            <button onClick={() => operationCount('rest')} className="btn-count">-</button>
             <input className="input-count" type="text" value={count} onChange={e => setCount(e.target.value)} />
             <button onClick={() => operationCount('sum')} className="btn-count">+</button>
        </div>
      <button className="btn-add" onClick={() => addToCart({...productDetail, cantidad: count})}>Agregar al carro <FiShoppingCart/> </button>
    </div>
  )
}

export default ItemCount