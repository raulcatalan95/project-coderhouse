import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch('../../products.json')
    .then((response) => response.json())
    .then((data) => {
      const product = data.productos.find((product) => product.id === Number(id));
      setProductDetail(product);
    });
  }, [id]);
  return (
    <div className="detail-container">
        <ItemDetail 
            img={productDetail.img}
            modelo={productDetail.modelo}
            tipo={productDetail.tipo}
            descripcion={productDetail.descripcion}
            precio={productDetail.precio}
        />
        {/* <div className="detail-item">
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
                <button className="btn-add">Agregar al carro <FiShoppingCart/> </button>
            </div>
        </div> */}
    </div>
  )
}

export default ItemDetailContainer