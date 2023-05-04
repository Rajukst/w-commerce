import React from 'react';
import Blogs from '../Pages/Blogs/Blogs';
import Collections from '../Pages/Collections/Collections';
import DateTimer from '../Pages/DateTimer/DateTimer';
import HomeCarosul from '../Pages/HomeCarosul/HomeCarosul';
import HomeProductList from '../Pages/HomeShowingProducts/HomeProductList';
import Information from '../Pages/Shipping_Support/Information';
import TopSeller from '../Pages/TopSeller/TopSeller';

const MainHome = () => {
    return (
        <div className='mt-3'>
            <HomeCarosul></HomeCarosul>
            <HomeProductList></HomeProductList>
            <Collections></Collections>
            <Information></Information>
            {/* <TopSeller></TopSeller> */}
            <DateTimer></DateTimer>
            <Blogs></Blogs>
        </div>
    );
};

export default MainHome;