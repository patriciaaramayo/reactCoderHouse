import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<ItemListContainer/>}/>
          <Route index path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route index path="/item/:itemId" element={<ItemDetailContainer/>}/> 
          {/* <Route index path="/cart" element={<Cart/>}/>  */}
          {/* <Route path='/error' element={ <Error404 /> } /> */}
          <Route path='*' element={<Navigate to= '/' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;