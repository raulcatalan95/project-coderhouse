import { FiShoppingCart } from "react-icons/fi";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const CardWidget = () => {
  const { productsCart, productsCount, productsCounter } = useContext(CartContext);
  useEffect(() => {
    productsCount();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsCart])
  
  return (
    <div className="cart">
        <div className="count-cart">{productsCounter}</div>
        <FiShoppingCart />
    </div>
  )
}

export default CardWidget