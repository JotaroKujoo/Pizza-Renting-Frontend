import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Register from './containers/User/Register/Register'
import Login from './containers/User/Login/Login'
import Pizzeria from './containers/Pizzeria/Pizzeria';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />;
          <Route path="/register" element={<Register/>} />;
          <Route path="/login" element={<Login/>} />;
          <Route path="/pizzeria" element={<Pizzeria/>}/>;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
