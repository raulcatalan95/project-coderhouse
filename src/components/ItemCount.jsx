import { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { toast } from 'react-toastify';


const ItemCount = ({productDetail}) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addCart = () => {
    addToCart({...productDetail, cantidad: count, total: count * Number(productDetail.precio)});
    toast.success('Producto agregado al carro');
  };
  
  const operationCount = (operation) => {
    if (operation === 'rest' && count <= 1) {
        setCount(1);
    } else if (operation === 'rest' && count > 1) {
        setCount(count - 1);   
    } else if (operation === 'sum' && count >= productDetail.stock) {
        setCount(productDetail.stock);
        toast.warning('La cantidad de productos no puede superar el stock')
    } else {
        setCount(count + 1);
    }
  }

  return (
    <div className="item-count">
        <div className="count">
            <button onClick={() => operationCount('rest')} className="btn-count">-</button>
             <input className="input-count"  disabled type="text" value={count} onChange={e => setCount(e.target.value)} />
             <button onClick={() => operationCount('sum')} className="btn-count">+</button>
        </div>
      <button className="btn-add" onClick={() => addCart()}>Agregar al carro <FiShoppingCart/> </button>
    </div>
  )
}

export default ItemCount