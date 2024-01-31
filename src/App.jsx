
import './App.css'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import ItemListContainer from './views/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer';
import CartContainer from './views/CartContainer';
import Navbar from './components/Navbar';
import ErrorRoute from './views/ErrorRoute';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyDjcJbzRK7wZZgCipzT_Tcd2pMC1_rmOyQ",
  authDomain: "coderhouse-5da1a.firebaseapp.com",
  projectId: "coderhouse-5da1a",
  storageBucket: "coderhouse-5da1a.appspot.com",
  messagingSenderId: "1057249299968",
  appId: "1:1057249299968:web:c2dd52b5ceb6bf4d6ed2e5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);


function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:category' element={<ItemListContainer />} />
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          <Route path='/carro' element={<CartContainer />} />
          <Route path='*' element={<ErrorRoute />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App
