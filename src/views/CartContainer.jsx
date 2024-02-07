import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import WithoutCart from "../components/WithoutCart";
import CartProduct from "../components/CartProduct";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContainer = () => {
  const { productsCart, setProductsCart, cleanCart, productsCount, productsCounter } = useContext(CartContext);
  const [ totalCompra, setTotalCompra ] = useState(0);

  useEffect(() => {
    const sumTotal =  productsCart.reduce((acc, curr) => acc + curr.total, 0);
    setTotalCompra(sumTotal.toFixed(2));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsCart])

  return (
    <div className="cart-container">
      <ToastContainer />
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
               <Link to={'/checkout'}><button>Continuar compra</button></Link>
               <button onClick={() => setProductsCart([])} className="btn-danger">Vaciar carro</button>
            </div>
        }
    </div>
  )
}

export default CartContainer