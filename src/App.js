
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import LoggingSigup from './pages/LogingSignup';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/shoppingWebsite' : undefined}>
      <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoggingSigup />} />
          <Route path="*" element={<div className="not-found"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>This page wandered off.</h1><p>Let’s get you back to something good.</p><Link className="button button-primary" to="/">Back to shopping</Link></div>} />
        </Routes>
      </main>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
