import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter , Routes , Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home_page/HomePage';
import Signup from './landing_page/signup_page/Signup';
import AboutPage from './landing_page/about_page/AboutPage';
import ProductsPage from './landing_page/product/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support_page/SupportPage';
import Footer from './landing_page/Footer';
import UpNavbar from './landing_page/UpNavbar';
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <UpNavbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup_page' element={<Signup/>}/>
    <Route path='/about_page' element={<AboutPage/>}/>
    <Route path='/product' element={<ProductsPage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/support_page' element={<SupportPage/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </HashRouter>
);
