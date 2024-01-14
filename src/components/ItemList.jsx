import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ItemList = ({name, src, price, id}) => {
  return (
    <div className="item-list">
        <img src={src} alt="photo" />
        <div className="content-item-list">
            <h6 className="name"> {name} </h6>
            <p className="price">Precio:  ${price} </p>
            <div className="button-container">
            <Link to={`/detalle/${id}`}><button>Ver detalle</button></Link>
            </div>
        </div>
    </div>
  )
}

export default ItemList