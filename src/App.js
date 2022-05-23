import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Auth/Login';
import Singup from './Pages/Auth/Singup';
import Home from './Pages/Home/Home';
import Footer from './Pages/Sherd/Footer';
import Navber from './Pages/Sherd/Navber';
import Services from './Services/Services';
import Update from './Services/Update';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Singup></Singup>}></Route>
        <Route path="/service" element={<Services></Services>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
