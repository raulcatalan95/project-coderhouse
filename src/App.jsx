
import './App.css'
import ItemListContainer from './views/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer';
import Navbar from './components/Navbar';
import ErrorRoute from './views/ErrorRoute';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:category' element={<ItemListContainer />} />
        <Route path='/detalle/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<ErrorRoute />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
