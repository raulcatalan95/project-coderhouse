import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";

// eslint-disable-next-line react/prop-types
const ItemListContainer = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch('../../products.json')
    .then((response) => response.json())
    .then((data) => {
      setAllProducts(data.productos);
      const dataFilter =  data.productos.filter((product) => product.tipo === category);
      setFilterProducts(dataFilter);
    });
  }, [category]);

  return (
    <div className="item-list-container">
        {
          !category ?
              allProducts.map((product, index) => (
              <ItemList key={index} name={product.modelo} src={product.img} price={product.precio} id={product.id} />
              ))
           : 
            filterProducts.map((product, index) => 
            (
              <ItemList key={index} name={product.modelo} src={product.img} price={product.precio} id={product.id} />
            )
          )
        }
    </div>
  )
}

export default ItemListContainer