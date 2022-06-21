import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { CartContextProvider } from './context/CartContext'

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index path="/" element={<ItemListContainer />} />
            <Route index path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route index path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route index path="/cart" element={<Cart />} />
            {/* <Route path='/error' element={ <Error404 /> } /> */}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App;