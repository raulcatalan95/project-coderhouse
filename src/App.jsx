
import './App.css'
import ItemListContainer from './views/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer';
import CartContainer from './views/CartContainer';
import Navbar from './components/Navbar';
import ErrorRoute from './views/ErrorRoute';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';




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
