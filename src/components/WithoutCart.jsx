import { Link } from "react-router-dom"

const WithoutCart = () => {
  return (
    <div className="without-cart">
        <h1>¡Ups! El carro está vacío</h1>
        <Link to={'/'}><button className="btn-secondary">Ir a comprar</button></Link>
    </div>
  )
}

export default WithoutCart