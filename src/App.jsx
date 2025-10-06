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
import Agency from "./selling/Agency"
import Amazon from "./selling/Amazon"
import Sixfigure from "./selling/Sixfigure"
import Entrepreneurs from "./selling/Entrepreneurs"
import Ghost from "./selling/Ghost"
import Market from "./selling/Market"
import Copy from "./selling/Copy"
import Money from "./selling/Money"
import Clickaffiliate from "./selling/Clickaffiliate"
import TermsCondition from "./cms/TermsCondition"
import PrivacyPolicy from "./cms/PrivacyPolicy"
import RefundPolicy from "./cms/RefundPolicy"


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
        <Route path="/products/agency" element={<Agency/>}/>
        <Route path="/products/amazon" element={<Amazon/>}/>
        <Route path="/products/sixfigure" element={<Sixfigure/>}/>
        <Route path="/products/entrepreneurs" element={<Entrepreneurs/>}/>
        <Route path="/products/ghost" element={<Ghost/>}/>
        <Route path="/products/market" element={<Market/>}/>
        <Route path="/products/copy" element={<Copy/>}/>
        <Route path="/products/money" element={<Money/>}/>
        <Route path="/products/1-click-affiliate" element={<Clickaffiliate/>}/>
        <Route path="/terms-condition" element={<TermsCondition/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/refund-policy" element={<RefundPolicy/>}/>
        {/* <Route path="/products/money-gram" element={<MoneyGram/>}/> */}
        {/* <Route path="/auth/callback" element={<Callback />} /> */}

      </Routes>
    </AuthProvider>
  )
}

export default App
