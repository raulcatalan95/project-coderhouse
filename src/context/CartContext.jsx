import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
export const CartContextProvider = ({ children }) => {
  const [ productsCart, setProductsCart] = useState([]);
  const [ productsCounter, setProductsCounter] = useState(0)

  const addToCart = (newProduct) => {
    setProductsCart([...productsCart, newProduct]);
    console.log(newProduct);
  };
  
  function productsCount() {
    const count = productsCart.reduce((acc, curr) => acc + curr.cantidad, 0);
    setProductsCounter(count);
 };

  return (
    <CartContext.Provider value={{productsCart, setProductsCart, addToCart, productsCounter, productsCount}}>
        {children}
    </CartContext.Provider>
  )
}
