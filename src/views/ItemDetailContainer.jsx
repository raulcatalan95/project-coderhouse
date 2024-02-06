import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { CartContext } from "../context/CartContext";
import { collection, getDocs, query, where, doc } from 'firebase/firestore/lite';
import { db } from ".././firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const { productsCart } = useContext(CartContext);
  const [ isInCart, setInCart] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    const productsCollection = id && query(collection(db, "productos"), where("id", "==", Number(id)))
    getDocs(productsCollection)
      .then((res) => {
        const product = res.docs.map(doc => doc.data());
        setProductDetail(product[0]);
      })
    }, [id]);

  return (
    <div className="detail-container">
      <ToastContainer />
        <ItemDetail 
            productDetail={productDetail}
        />
    </div>
  )
}

export default ItemDetailContainer