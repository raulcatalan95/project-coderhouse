import ItemCountCart from "./ItemCountCart";
import { useEffect, useState } from "react";

const CartProduct = ({ product }) => {
//   const [ totalForProduct, setTotalForProduct ] = useState(product.cantidad * Number(product.precio));
//   useEffect(() => {
//     setTotalForProduct(product.cantidad * Number(product.precio));
//   }, [product]);
  return (
    <div className="cart-product">
         <div className="detail-item w-100">
            <div className="img-detail">
                <img src={product.img} alt="Photo" />
            </div>
            <div className="content-detail">
                <div>
                    <h4>{product.modelo}</h4>
                    <h6>Categoria: {product.tipo}</h6>
                </div>
                <p>{product.descripcion}</p>
            </div>
            <div className="add-cart">
                <h2>$ {product.precio}</h2>
                <ItemCountCart product={product} />
                <h5>Total: ${product.total.toFixed(2)}</h5>
            </div>
        </div>
    </div>
  )
}

export default CartProduct