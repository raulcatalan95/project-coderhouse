import ItemCount from "./ItemCount"

// eslint-disable-next-line react/prop-types
const ItemDetail = ({img, modelo, tipo, descripcion, precio}) => {
  return (
    <div className="detail-item">
            <div className="img-detail">
                <img src={img} alt="Photo" />
            </div>
            <div className="content-detail">
                <div>
                    <h4>{modelo}</h4>
                    <h6>Categoria: {tipo}</h6>
                </div>
                <p>{descripcion}</p>
            </div>
            <div className="add-cart">
                <h2>$ {precio}</h2>
                <ItemCount />
            </div>
        </div>
  )
}

export default ItemDetail