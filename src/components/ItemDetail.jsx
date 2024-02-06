import { useEffect, useState, useContext } from "react";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext";

const ItemDetail = ( {productDetail} ) => {
  const { productsCart } = useContext(CartContext);
  const [ isInCart, setInCart] = useState(false);

  useEffect(()=> {
    if (productsCart.length) {
        const isInTheCart = productsCart.find(product => product.id === productDetail.id);
        setInCart(isInTheCart ? true : false);
      }
  }, [productsCart, productDetail]);

  return (
    <div className="detail-item">
            <div className="img-detail">
                <img src={productDetail.img} alt="Photo" />
            </div>
            <div className="content-detail">
                <div>
                    <h4>{productDetail.modelo}</h4>
                    <h6>Categoria: {productDetail.tipo}</h6>
                </div>
                <p>{productDetail.descripcion}</p>
            </div>
            <div className="add-cart">
                <div>
                  <h2>$ {productDetail.precio}</h2>
                  <p className="stock">stock: {productDetail.stock}</p>
                </div>
                {
                    isInCart
                    ?
                      <>
                        <p>!Este producto ya está en el carro! </p>
                        <Link to={'/carro'}><button>Ir al carro</button></Link>
                      </>
                    :  
                      <ItemCount productDetail={productDetail} />
                }
            </div>
        </div>
  )
}

export default ItemDetail