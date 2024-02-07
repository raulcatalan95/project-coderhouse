import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { collection, getDocs, query, where, doc } from 'firebase/firestore/lite';
import { db } from ".././firebaseConfig";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/components_ui/Loader";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    const productsCollection = id && query(collection(db, "productos"), where("id", "==", Number(id)))
    getDocs(productsCollection)
      .then((res) => {
        const product = res.docs.map(doc => doc.data());
        setProductDetail(product[0]);
      })
      .catch((err) => err)
      .finally(() => {
        setLoading(false);
      })
    }, [id]);

  return (
    <div className="detail-container">
      <ToastContainer />
      {
        loading
        ? <Loader />
        : <ItemDetail productDetail={productDetail} />
      }
    </div>
  )
}

export default ItemDetailContainer