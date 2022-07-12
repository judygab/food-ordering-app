import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartProducts } from '../stores/cart/cartSlice';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Menu from '../pages/Menu';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Cart from '../pages/Cart';
import PaymentSuccess from '../pages/PaymentSuccess';

const Navigation = () => {
  const productsInCart = useSelector(cartProducts);

  return (
    <BrowserRouter>
      <Header cartCount={productsInCart ? productsInCart.length : 0} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
