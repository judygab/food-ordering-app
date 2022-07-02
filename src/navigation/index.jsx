import {
    BrowserRouter, Route, Routes
} from "react-router-dom";

import Home from '../pages/Home';
import Login from '../pages/Login'
import Register from '../pages/Register'
import { Header } from "../components/Header";




const Navigation=()=>{
    return <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/register"  element={<Register />} />
    </Routes>
  </BrowserRouter>
}

export default Navigation