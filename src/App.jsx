
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <main className='container-items'>
        <ItemListContainer text={'Soy Item List Container'} />
      </main>
    </>
  )
}

export default App
