import { Route, Routes } from 'react-router-dom';
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './Pages/Auth/Login';
import RequerAuth from './Pages/Auth/RequerAuth';
import Singup from './Pages/Auth/Singup';
import AddReview from './Pages/Dashboard/AddReview';
import AllOrder from './Pages/Dashboard/AllOrder';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageItem from './Pages/Dashboard/ManageItem';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Sherd/Footer';
import Navber from './Pages/Sherd/Navber';
import Order from './Services/Order';
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
        <Route path="/order/:id" element={<Order></Order>}></Route>
        <Route path="/update/:id" element={<RequerAuth>
          <Update></Update>
        </RequerAuth>}></Route>
        <Route path="/dashboard" element={<RequerAuth>
          <Dashboard></Dashboard>
        </RequerAuth>}>
        <Route index element={<MyProfile></MyProfile>}></Route>
        <Route path="/dashboard/review" element={<AddReview></AddReview>}></Route>
        <Route path="/dashboard/my-Order" element={<MyOrder></MyOrder>}></Route>
        <Route path="/dashboard/allorder" element={<AllOrder></AllOrder>}></Route>
        <Route path="/dashboard/manage" element={<ManageItem></ManageItem>}></Route>



        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
      
    </div>
  );
}

export default App;
