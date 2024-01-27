import ItemCount from "./ItemCount"

const ItemDetail = ( {productDetail} ) => {
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
                <h2>$ {productDetail.precio}</h2>
                <ItemCount productDetail={productDetail} />
            </div>
        </div>
  )
}

export default ItemDetail