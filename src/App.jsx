import "./App.css"
import { Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Callback from "./pages/auth/Callback"
import DatabaseDemo from "./pages/DatabaseDemo"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Products from "./pages/Products"
import Ecom from "./selling/Ecom"
import FeaturesDemo from "./pages/FeaturesDemo"


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/auth/callback" element={<Callback/>}/>
        <Route path="/database" element={<DatabaseDemo/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/ecom" element={<Ecom/>}/>
        <Route path="/features-demo" element={<FeaturesDemo/>}/>
        {/* <Route path="/auth/callback" element={<Callback />} /> */}

      </Routes>
    </AuthProvider>
  )
}

export default App
