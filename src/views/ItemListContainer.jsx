import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from ".././firebaseConfig";
import Loader from "../components/components_ui/Loader";

// eslint-disable-next-line react/prop-types
const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
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
      .catch(err => err)
      .finally(() => {
        setLoading(false);
      })
  }, [category]);

  return (
    <div className="item-list-container">
        {
          loading
          ? <Loader/>
          : allProducts.map((product, index) => (
            <ItemList key={index} name={product.modelo} src={product.img} price={product.precio} id={product.id} />
            ))   
        }
    </div>
  )
}

export default ItemListContainer;