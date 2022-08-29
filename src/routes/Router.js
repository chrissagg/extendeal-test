import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import App from '../containers/App'
import NavBar from '../components/NavBar';
import NewProduct from '../containers/NewProduct'
import ProductDetails from '../containers/ProductDetails'


const Router = () => {
  return (
    <BrowserRouter>

      <NavBar />
      
      <Routes>
        
        <Route exact path="/" element={<App />} />
        <Route exact path="/new" element={<NewProduct />} />
        <Route exact path="/details" element={<ProductDetails />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default Router