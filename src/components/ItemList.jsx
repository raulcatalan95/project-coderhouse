import { FiShoppingCart } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const ItemList = ({name, src, price}) => {
  return (
    <div className="item-list">
        <img src={src} alt="photo" />
        <div className="content-item-list">
            <h6 className="name"> {name} </h6>
            <p className="price">Precio:  ${price} </p>
            <div className="button-container">
                <button>Agregar <FiShoppingCart /></button>
            </div>
        </div>
    </div>
  )
}

export default ItemList