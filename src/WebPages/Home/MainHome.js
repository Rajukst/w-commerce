import React from 'react';
import Collections from '../Pages/Collections/Collections';
import DateTimer from '../Pages/DateTimer/DateTimer';
import HomeCarosul from '../Pages/HomeCarosul/HomeCarosul';
import HomeProductList from '../Pages/HomeShowingProducts/HomeProductList';
import Information from '../Pages/Shipping_Support/Information';
import HomeBlogs from '../Pages/Blogs/HomeBlogs/HomeBlogs';
import ProductCarosul from '../Pages/ProductCarosul/ProductCarosul';
import Instagram from '../Pages/Social/Instagram';


const MainHome = () => {
    const newYear = new Date("June 1, 2023").getTime()
    return (
        <div className='mt-3'>
            <HomeCarosul></HomeCarosul>
            <HomeProductList></HomeProductList>
            <Collections></Collections>
            <Information></Information>
            <ProductCarosul></ProductCarosul>
              <DateTimer newYear={newYear}></DateTimer>
              <HomeBlogs></HomeBlogs>
                <Instagram></Instagram>
                
        </div>
    );
};

export default MainHome;