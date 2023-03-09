
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyHeader from './WebPages/Pages/Header/MyHeader';
import MainHome from './WebPages/Home/MainHome';
import AddProduct from './WebPages/AddProducts/AddProduct';
import AddBlogs from './WebPages/AddBlogs/AddBlogs';
import Blogs from './WebPages/Pages/Blogs/Blogs';
import SingleDynamicBlog from './WebPages/Pages/Blogs/BlogDetails/SingleDynamicBlog/SingleDynamicBlog';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <MyHeader></MyHeader>
     <Routes>
     <Route path="/" element={<MainHome />}/>
     <Route path="/add-product" element={<AddProduct />}/>
     <Route path="/add-blog" element={<AddBlogs/>}/>
     <Route path="/blogs" element={<Blogs/>}/>
     <Route path="/blogs/:id" element={<SingleDynamicBlog/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
