
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyHeader from './WebPages/Pages/Header/MyHeader';
import MainHome from './WebPages/Home/MainHome';
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
import MyOrders from './WebPages/UserDashBoard/MyOrders/MyOrders';
import Reviews from './WebPages/UserDashBoard/Reviews/Reviews';
import Address from './WebPages/UserDashBoard/Address/Address';
import AccountInfo from './WebPages/UserDashBoard/AccountInfo/AccountInfo';
import ChangePassword from './WebPages/UserDashBoard/ChangePassword/ChangePassword';
import AllBlogs from './WebPages/Pages/Blogs/AllBlogs/AllBlogs';
import SingleDynamicBlog from './WebPages/Pages/Blogs/BlogDetails/SingleDynamicBlog/SingleDynamicBlog';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './Firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { setUser, toggleLoading } from './redux/allFeatures/Auth/authSlice';

function App() {
  const dispatch= useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
     if(user){
      dispatch(setUser(user.email))
      console.log(user)
     }
     else{
      dispatch(toggleLoading())
     }
    })
  },[])
  return (
    <div className="App">
     <BrowserRouter>
     <MyHeader></MyHeader>
     <Routes>
     <Route path="/" element={<MainHome />}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/products" element={<AllProducts/>}/>
     <Route path="/products/:id" element={<DynamicHome/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path='/dashboard' element={<PrivateRoute><UserDashboard/></PrivateRoute>}>
      <Route path='review' element={<Reviews/>}/>
      <Route path='address' element={<Address/>}/>
      <Route path='account' element={<AccountInfo/>}/>
      <Route path='cngpassword' element={<ChangePassword/>}/>
      <Route path='orders' element={<MyOrders/>}/>
     </Route>
     <Route path="/register" element={<Registration/>}/>
     <Route path="/mens" element={<Mens/>}/>
     <Route path="/blogs" element={<AllBlogs/>}/>
     <Route path="/blogs/:id" element={<SingleDynamicBlog/>}/>

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
