import React from 'react';
import Collections from '../Pages/Collections/Collections';
import DateTimer from '../Pages/DateTimer/DateTimer';
import HomeCarosul from '../Pages/HomeCarosul/HomeCarosul';
import HomeProductList from '../Pages/HomeShowingProducts/HomeProductList';
import Information from '../Pages/Shipping_Support/Information';
import HomeBlogs from '../Pages/Blogs/HomeBlogs/HomeBlogs';


const MainHome = () => {
    return (
        <div className='mt-3'>
            <HomeCarosul></HomeCarosul>
            <HomeProductList></HomeProductList>
            <Collections></Collections>
            <HomeBlogs></HomeBlogs>
              <DateTimer></DateTimer>
            <Information></Information>
          
        </div>
    );
};

export default MainHome;