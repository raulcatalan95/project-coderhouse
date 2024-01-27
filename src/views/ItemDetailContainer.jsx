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
            id={productDetail.id}
            productDetail={productDetail}
        />
    </div>
  )
}

export default ItemDetailContainer