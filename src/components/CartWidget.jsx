import { FiShoppingCart } from "react-icons/fi";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"


const CardWidget = () => {
  const { productsCart, productsCount, productsCounter } = useContext(CartContext);
  useEffect(() => {
    productsCount();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsCart])
  
  return (
    <div className="cart">
      <Link to={`/carro`}>
        {
          productsCart.length > 0 &&
            <div className="count-cart">{productsCounter}</div>
        }
        <FiShoppingCart />
      </Link>
    </div>
  )
}

export default CardWidget