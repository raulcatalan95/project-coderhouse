import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import WithoutCart from "../components/WithoutCart";
import CartProduct from "../components/CartProduct";

const CartContainer = () => {
  const { productsCart, productsCount, productsCounter } = useContext(CartContext);
  const [ totalCompra, setTotalCompra ] = useState(0); 

  useEffect(() => {
    const sumTotal =  productsCart.reduce((acc, curr) => acc + curr.total, 0);
    setTotalCompra(sumTotal.toFixed(2));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsCart])

  return (
    <div className="cart-container">
        {
            productsCart.length > 0
            ?
              <div className="cards">
                {
                    productsCart.map((item) => (<CartProduct key={item.id} product={item} />))
                }
              </div>
            :
              <WithoutCart />
        }
        {
            productsCart.length > 0 &&
            <div className="detail-total-cart">
               <h6>Cantidad de productos: <span>{productsCounter}</span></h6> 
               <h6>Total compra: <span>${totalCompra}</span></h6> 
               <button>Confirmar compra</button>
            </div>
        }
    </div>
  )
}

export default CartContainer