import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Auth/Login';
import Singup from './Pages/Auth/Singup';
import Home from './Pages/Home/Home';
import Navber from './Pages/Sherd/Navber';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Singup></Singup>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
