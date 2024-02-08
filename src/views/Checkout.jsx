import { Navigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";


const Checkout = () => {
const { productsCart } = useContext(CartContext);
const [ totalValue, setTotalValue ] = useState(0);
const [ isValidForm, setIsValidForm ] = useState(false);
const [ isValidEmail, setIsValidEmail ] = useState(true);
const [ isValidPhone, setIsValidPhone ] = useState(true);
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
    // const isValid = isAllComplete && isValidEmail && isValidPhone;
    setIsValidForm(isAllComplete);
    console.log(isValidForm);
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

if (productsCart.length <= 0) {
    return <Navigate to={'/'} />
}

  return (
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
                <button disabled={!isValidForm || !isValidEmail || !isValidPhone}>Confirmar Compra</button>
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
        <h4>Total compra: ${totalValue.toFixed(2)}</h4>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Checkout