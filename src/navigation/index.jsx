import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { Header } from '../components/Header';
import { About } from '../components/About';
import Cart from '../pages/Cart';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <About />
    </BrowserRouter>
  );
};

export default Navigation;
