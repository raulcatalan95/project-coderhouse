import { useContext, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { LiaTrashAltSolid } from "react-icons/lia";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const ItemCountCart = ({product}) => {
  const { productsCart, editCounterInCart, deleteProductCart } = useContext(CartContext);
  const [count, setCount] = useState(product.cantidad);
  useEffect(()=> {
    editCounterInCart(product, count);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const deleteFromCart = () => {
    deleteProductCart(product);
    toast('Producto eliminado del carro')
  };
  
  const operationCount = (operation) => {
    if (operation === 'rest' && count <= 1) {
        setCount(1);
    } else if (operation === 'rest' && count > 1) {
        setCount(count - 1);
    } else if (operation === 'sum' && count >= product.stock) {
      setCount(product.stock);
      toast.warning('La cantidad de productos no puede superar el stock')
    } else {
        setCount(count + 1);
    }
  }

  return (
    <div className="item-count-cart">
        <div className="count">
          {
            count <= 1
              ? <button onClick={() => deleteFromCart()} className="btn-count btn-danger"><LiaTrashAltSolid /></button>
              : <button onClick={() => operationCount('rest')} className="btn-count">-</button>
          }
             <input className="input-count"  disabled type="text" value={count} onChange={e => setCount(e.target.value)} />
             <button onClick={() => operationCount('sum')} className="btn-count">+</button>
        </div>
    </div>
  )
}

export default ItemCountCart