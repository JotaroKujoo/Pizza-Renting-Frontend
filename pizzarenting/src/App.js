import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Register from './containers/User/Register/Register'
import Login from './containers/User/Login/Login'
import Pizzeria from './containers/Pizzeria/Pizzeria';
import Order from './containers/Orders/Orders';
import Payment from './containers/Orders/Payment/Payment';
import UserOrders from './containers/User/Profile/UserOrders';
import UserData from './containers/User/Profile/UserData';
import AdminOrders from './containers/User/Profile/AdminOrders';
import AdminData from './containers/User/Profile/AdminData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/register" element={<Register />} />;
          <Route path="/login" element={<Login />} />;
          <Route path="/pizzeria" element={<Pizzeria />} />;
          <Route path="/order" element={<Order />} />;
          <Route path="/payment" element={<Payment />} />;
          <Route path="/userorders" element={<UserOrders />} />;
          <Route path='/user' element={<UserData/>}/>;
          <Route path="/adminorders" element={<AdminOrders />} />;
          <Route path='/admindata' element={<AdminData/>} />;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
