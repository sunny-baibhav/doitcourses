import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Global Imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Callback from "./pages/auth/Callback";
import DatabaseDemo from "./pages/DatabaseDemo";
import FeaturesDemo from "./pages/FeaturesDemo";
import TermsCondition from "./cms/TermsCondition";
import PrivacyPolicy from "./cms/PrivacyPolicy";
import RefundPolicy from "./cms/RefundPolicy";
import Webiste from "./website/Webiste";
import Landingpage from "./pages/custom/Landingpage";

// Selling/Product Pages
import Products from "./pages/Products";
import Ecom from "./selling/Ecom";
import Agency from "./selling/Agency";
import Amazon from "./selling/Amazon";
import Sixfigure from "./selling/Sixfigure";
import Entrepreneurs from "./selling/Entrepreneurs";
import Ghost from "./selling/Ghost";
import Market from "./selling/Market";
import Copy from "./selling/Copy";
import Money from "./selling/Money";
import Clickaffiliate from "./selling/Clickaffiliate";

// Notifications
// import PurchaseNotification from "./pages/notifications";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/callback" element={<Callback />} />
        <Route path="/database" element={<DatabaseDemo />} />
        <Route path="/features-demo" element={<FeaturesDemo />} />

        {/* Products Section */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/ecom" element={<Ecom />} />
        <Route path="/products/agency" element={<Agency />} />
        <Route path="/products/amazon" element={<Amazon />} />
        <Route path="/products/sixfigure" element={<Sixfigure />} />
        <Route path="/products/entrepreneurs" element={<Entrepreneurs />} />
        <Route path="/products/ghost" element={<Ghost />} />
        <Route path="/products/market" element={<Market />} />
        <Route path="/products/copy" element={<Copy />} />
        <Route path="/products/money" element={<Money />} />
        <Route path="/products/1-click-affiliate" element={<Clickaffiliate />} />
        <Route path="/products/landingpage" element={<Landingpage />} />

        {/* CMS Pages */}
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />

        {/* Others */}
        <Route path="/website" element={<Webiste />} />
        <Route path="/landingpage" element={<Landingpage />} />
      </Routes>

      {/* 🔔 Global Notification Popup */}
      {/* <PurchaseNotification /> */}
    </AuthProvider>
  );
}

export default App;
