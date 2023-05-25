import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Thankyou from './components/Thankyou';
import ShopSingle from './components/ShopSingle';

function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path='/cart/checkout' element={<Checkout/>}></Route>
      <Route path='/thankyou' element={<Thankyou/>}></Route>
      <Route path='/shop-single' element={<ShopSingle/>}></Route>
    </Routes>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
