import { Navigate } from "react-router-dom"
import Loader from "../components/components_ui/Loader";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore/lite';
import { db } from ".././firebaseConfig";


const Checkout = () => {
const { productsCart, setProductsCart } = useContext(CartContext);
const [ totalValue, setTotalValue ] = useState(0);
const [ isValidForm, setIsValidForm ] = useState(false);
const [ isValidEmail, setIsValidEmail ] = useState(true);
const [ isValidPhone, setIsValidPhone ] = useState(true);
const [ buyId, setBuyId ] = useState(null);
const [ isLoading, setIsLoading ] = useState(false);
const [ formValues, setFormValues] = useState({
    nombre: null,
    email: null,
    telefono: null,
    direccion: null,
})

function handleInputChange(e) {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    });
};
function validateEmail() {
    const expresionRegularEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validateEmailFormat = expresionRegularEmail.test(formValues.email);
    if (formValues.email != null) {
        setIsValidEmail(validateEmailFormat);
    }
};
function validatePhone() {
    const expresionRegularNumbers = /[0-9]{8,}/;
    const validatePhoneFormat = expresionRegularNumbers.test(formValues.telefono);
    if (formValues.telefono != null) {
        setIsValidPhone(validatePhoneFormat);
    }
};
function validateForm() {
    const isAllComplete = Object.values(formValues).every(valor => valor != '' && valor != null);
    validateEmail();
    validatePhone();
    setIsValidForm(isAllComplete);
};

async function finishBuy(e) {
    e.preventDefault();
    setIsLoading(true);
    const order = {
        productsCart,
        personalData: {...formValues}
    }
    try {
        const createBuy = await addDoc(collection(db, "compras"), order);
        setBuyId(createBuy.id);
        setProductsCart([]);
        setIsLoading(false);

    } catch (error) {
        console.log(error);
    }
    productsCart.forEach((product) =>{
        const productRef = doc(db, "productos", product.idStore);
        // Set the "capital" field of the city 'DC'
        updateDoc(productRef, { stock: product.stock - product.cantidad })
         .then(res => res);
    })
};

useEffect(() => {
    if (productsCart.length === 1) {
        setTotalValue(productsCart[0].total);
    } else {
        const sumTotal =  productsCart.reduce((acc, curr) => acc + curr.total, 0);
        setTotalValue(sumTotal.toFixed(2));
    }
    validateForm();
   
}, [formValues]);

if (productsCart.length <= 0 && !buyId) {
    return <Navigate to={'/'} />
}

  return (
    <>
    { isLoading && <Loader /> }
    {
        buyId
        ?
        <div className="success-buy">
            <FaCircleCheck />
            <h3>¡Tu compra se realizó con éxito!</h3>
            <p>Numero de compra: <span>{buyId}</span></p>
            <Link to={'/'}><button>Ir al home</button></Link>
        </div> 
        :
        <div className="main-checkout">
          <div className="container-form">
            <h4>Completa tus datos para terminar la compra</h4>
            <form>
                <label htmlFor="nombre" className="input-group">
                    Nombre
                    <input onChange={handleInputChange} type="text" name="nombre" placeholder="Ingrese nombre" required />
                    { formValues.nombre === '' && <span className="error-msg">Campo invalido</span> }
                </label>
                <label htmlFor="email" className="input-group">
                    Correo electronico
                    <input onChange={handleInputChange} type="email" name="email" placeholder="Ingresa email" required />
                    { (formValues.email === '' || !isValidEmail) && <span className="error-msg">Correo invalido</span> }
                </label>
                <label htmlFor="telefono" className="input-group">
                    Teléfono
                    <input onChange={handleInputChange} type="text" name="telefono" placeholder="Ingresa teléfono" required />
                    { (formValues.telefono === '' || !isValidPhone) && <span className="error-msg">Minimo 8 numeros</span> }
                </label>
                <label htmlFor="direccion" className="input-group">
                    Dirección
                    <input onChange={handleInputChange} type="text" name="direccion" placeholder="Ingresa Telefono" required />
                    { formValues.direccion === '' && <span className="error-msg">Campo invalido</span> }
                </label>
                <div className="button-form">
                    <button
                    disabled={!isValidForm || !isValidEmail || !isValidPhone}
                    type="submit"
                    onClick={(e) => finishBuy(e)}
                    >Confirmar Compra</button>
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
                            <p>Total: ${product.total.toFixed(2)}</p>
                        </div>
                    </div>
                ))
            }
            <h4>Total compra: ${totalValue}</h4>
            <div>
            </div>
        </div>
        </div>
    }
    </>
  )
}

export default Checkout