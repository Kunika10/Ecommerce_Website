import {  Navigate,Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import "@fontsource/cormorant-garamond";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import Product from "./Product";
import Footer from "./Footer";
import Productview from "./Productview";
import Contactus from "./Contactus";
import Homepopup from "./Homepopup";
import Cart from "./Cart";
import AOS from 'aos'
import "aos/dist/aos.css";
import Checkout from "./Checkout";
import Scrolltop from "./Scrolltop";
import Pages from "./Pages";
import Blog from "./Blog";
import Landing from "./Landing";


const scrollCounter = document.querySelector('.js-scroll-counter');

window.addEventListener('scroll', function() {
  scrollCounter.innerHTML = window.pageYOffset;
});
AOS.init({
  offset: 200,
  duration: 1000,
  easing: 'ease-in',
  delay: 200,
  mirror: true
});

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <ScrollToTop/>
    <Scrolltop/>
    <Routes>
      <Route path="/" element={<Home/>}

      />
      <Route path="product" element={<Product/>}/>
      <Route path="productview" element={<Productview/>}/>
      <Route path="contactus" element={<Contactus/>}/>
      <Route path="productview/Cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="pages" element={<Pages/>}/>
      <Route path="blog" element={<Blog/>}/>
    </Routes>
    <Homepopup/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
