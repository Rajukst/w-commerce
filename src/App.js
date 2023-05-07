
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyHeader from './WebPages/Pages/Header/MyHeader';
import MainHome from './WebPages/Home/MainHome';
import AddProduct from './WebPages/AddProducts/AddProduct';
import DynamicHome from './WebPages/Pages/HomeShowingProducts/DynamicHome/DynamicHome';
import Mens from './WebPages/Pages/AllCatagories/Mens/Mens';
import Cart from './WebPages/Pages/AllCatagories/Cart/Cart';
import AllProducts from './WebPages/Pages/AllCatagories/AllProducts/AllProducts';
import Footer from './WebPages/Pages/Footer/Footer';
import CopyRightInfo from './WebPages/Pages/Footer/CopyRightInfo';
import Login from './WebPages/Login/Login';
import Registration from './WebPages/Registration/Registration';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './WebPages/Pages/PrivateRoute/PrivateRoute';
import UserDashboard from './WebPages/UserDashBoard/UserDashboard';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <MyHeader></MyHeader>
     <Routes>
     <Route path="/" element={<MainHome />}/>
     <Route path="/add-product" element={<AddProduct />}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route
        path="/dashboard"
        element={
     
          <PrivateRoute><UserDashboard/></PrivateRoute>

        }
      />
     <Route path="/home-product/:id" element={<DynamicHome/>}/>
     <Route path="/products" element={<AllProducts/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Registration/>}/>
     </Routes>
     <Footer/>
     <CopyRightInfo/>
     <Toaster
  position="top-right"
  reverseOrder={true}
/>
     </BrowserRouter>
    </div>
  );
}

export default App;
