import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import ProductDetailPage from './pages/ProductDetailPage'
import PageNotFound404 from './pages/PageNotFound404'

const App = () => {
  return (
    <>
<Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<ProductsList/>}/>
      <Route path='/products/:id' element={<ProductDetailPage/>}/>
      <Route path='*' element={<PageNotFound404/>}/>
      
      </Routes>
    
    </>
  )
}

export default App
