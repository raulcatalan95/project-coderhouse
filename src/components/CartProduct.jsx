import ItemCountCart from "./ItemCountCart";
import { LiaTrashAltSolid } from "react-icons/lia";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const CartProduct = ({ product }) => {
  const { deleteProductCart } = useContext(CartContext);

  const deleteFromCart = () => {
    deleteProductCart(product);
    toast('Producto eliminado del carro');
  };

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
            <div className="add-cart gap-10">
                <div>
                <h2>$ {product.precio}</h2>
                <p className="stock">Stock: {product.stock}</p>
                </div>
                <ItemCountCart product={product} />
                <h5>Total: ${product.total.toFixed(2)}</h5>
                <button onClick={() => deleteFromCart()} className="btn-danger"><LiaTrashAltSolid /></button>
            </div>
        </div>
    </div>
  )
}

export default CartProduct