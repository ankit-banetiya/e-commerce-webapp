import { Routes, Route } from "react-router-dom"

import { NavBar } from "./components/navbar"
import { Products } from "./pages/products"
import { Product } from "./pages/product"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"
import { useCart } from './context/cart'
import Favorite from "./pages/favorite/favorite"
import Footer from "./components/footer/Footer"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
function App() {
  const { cartItemCount } = useCart()
  return (
    <>
      <NavBar  cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
