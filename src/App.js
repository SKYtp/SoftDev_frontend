import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./page/Home";
import OrderForm from "./page/OrderForm";
import Register from "./page/register";
import OrderList from "./page/orderList";
import Login from "./page/login";
import BoostForm from "./page/BoostForm";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<OrderForm/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/orderList" element={<OrderList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/boost" element={<BoostForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
