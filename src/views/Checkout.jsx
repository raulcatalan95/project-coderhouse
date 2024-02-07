import { Navigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";


const Checkout = () => {
const { productsCart } = useContext(CartContext);
const [ totalValue, setTotalValue ] = useState(0);

useEffect(() => {
    if (productsCart.length === 1) {
        setTotalValue(productsCart[0].total);
    } else {
        const sumTotal =  productsCart.reduce((acc, curr) => acc + curr.total, 0);
        setTotalValue(sumTotal.toFixed(2));
    }
}, []);

if (productsCart.length <= 0) {
    return <Navigate to={'/'} />
}

  return (
    <div className="main-checkout">
      <div className="container-form">
        <h4>Completa tus datos para terminar la compra</h4>
        <form>
            <label htmlFor="nombre" className="input-group">
                Nombre completo
                <input type="text" name="nombre" placeholder="Ingrese nombre" required />
            </label>
            <label htmlFor="email" className="input-group">
                Correo electronico
                <input type="email" name="email" placeholder="Ingresa email" required />
            </label>
            <label htmlFor="telefono" className="input-group">
                Teléfono
                <input type="text" name="telefono" placeholder="Ingresa teléfono" required />
            </label>
            <label htmlFor="telefono" className="input-group">
                Dirección
                <input type="text" name="telefono" placeholder="Ingresa Telefono" required />
            </label>
            <div className="button-form">
                <button disabled={true}>Confirmar Compra</button>
            </div>
        </form>
      </div>
      <div className="detail-checkout">
        {
            productsCart.map((product, index) => (
                <div key={index} className="card-checkout">
                    <img src={product.img} alt="a" />
                    <div className="card-checkout__detail">
                        <h4>{product.modelo}</h4>
                        <p>Precio: ${product.precio}</p>
                        <p>Cantidad: {product.cantidad}</p>
                        <p>Total: ${product.total}</p>
                    </div>
                </div>
            ))
        }
        <h4>Total compra: ${totalValue}</h4>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Checkout