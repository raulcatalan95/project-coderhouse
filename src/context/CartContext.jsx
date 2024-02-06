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

  function deleteProductCart(selectProduct) {
    const deleteProduct = productsCart.filter(product => product.id !== selectProduct.id)
    setProductsCart(deleteProduct);
  };

  function editCounterInCart(product, newCount) {
    const arrayEditCount = productsCart.map((item) => {
      if (item.id === product.id) {
        item.cantidad = newCount;
        item.total = (item.cantidad * Number(item.precio));
      }
      return item;
    })
    setProductsCart(arrayEditCount)
  };
  
  function productsCount() {
    const count = productsCart.reduce((acc, curr) => acc + curr.cantidad, 0);
    setProductsCounter(count);
 };

  return (
    <CartContext.Provider value={{productsCart, setProductsCart, addToCart, productsCounter, productsCount, editCounterInCart, deleteProductCart}}>
        {children}
    </CartContext.Provider>
  )
}
