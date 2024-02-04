import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from ".././firebaseConfig";

// eslint-disable-next-line react/prop-types
const ItemListContainer = () => {
  const [allProducts, setAllProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const productsCollection = category
      ? query(collection(db, "productos"), where("tipo", "==", category))
      : collection(db, 'productos');
    getDocs(productsCollection)
      .then((res) => {
        const products = res.docs.map(doc => doc.data());
        setAllProducts(products);
      })
  }, [category]);

  return (
    <div className="item-list-container">
        {
          allProducts.map((product, index) => (
          <ItemList key={index} name={product.modelo} src={product.img} price={product.precio} id={product.id} />
          ))
        }
    </div>
  )
}

export default ItemListContainer;