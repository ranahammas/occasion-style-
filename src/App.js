// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gen from './generaten/gen'
import Shipping from './shipping/shipping';
import Modal from './Modal/modal';
// import Carousel from '../src/carasoul/carasoul'
// import Home from './Home/home';
import Notfound from './Notfound/Notfound';
import Home from './Home/home';
import Footer from './footer/footer'
// import Earn from './Earn/earn';
import Call from './callback/callback';
import UpdateEnumForm from './enum/enum'
import Header from './header/header';
import Earning from './Earning/earning';
import AboutUs from './about us/About';
import PrivacyPolicy from './private/private';
import Addcart from './addcart/page';
import RefundPolicy from './Refund/Refund';
import ShippingPolicy from './shipping us/shipping us';
import Last from './last/last';
import Terms from './Terms/terms';
import AddCart from './addcart/page';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login-page" element={<Modal/>} />
        <Route path="/card" element={<AddCart/>} />
        <Route path="*" element={<Notfound/>} />
        <Route path="/header" element={<Header/>} />
        <Route path="/call-back" element={<Call/>} />
        <Route path="/earn-with-us" element={<Earning/>} />
        <Route path="/About" element={<AboutUs/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/Refund" element={<RefundPolicy/>} />
        <Route path="/shipping-policy" element={<ShippingPolicy/>} />
        <Route path="/Terms" element={<Terms/>} />


      </Routes>
    </Router>
  );
}

export default App;
