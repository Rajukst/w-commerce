import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementQty, incrementQty, removeItem } from '../../../../redux/allFeatures/Cart/cartSlice';


const RenderCart = ({cart}) => {
    const dispatch= useDispatch()
    console.log(cart);
const removeItemHandler = (cart) =>{
dispatch(removeItem(cart))
}

const handleIncrementQty = (cart) => {
    dispatch(incrementQty(cart))
}
const handleDecrementQty = (cart) => {
    dispatch(decrementQty(cart))
}
    return (
        <div className='gridsComponents'>
            <div className="productDetails">
                <div className="informations">
                    <div className="image">
                       <img className='cartImage'  src={cart?.product?.image} alt="cartImage" />
                    </div>
                    <div className="Pdetails">
                        <p>title</p>
                        <p>sku</p>
                        <p>available</p>
                        <button onClick={()=>removeItemHandler(cart)}>Remove</button>
                    </div>
               
                </div>
            </div>
            <div className="productDetails">
                <div className="qtyBtn">
                    <button onClick={()=>handleDecrementQty(cart)} className='me-1 inCrsBtn'>-</button>
                    <input className='inputTags' name="" id="" value={cart?.qty} />
                    <button onClick={()=>handleIncrementQty(cart)} className='ms-1 inCrsBtn'>+</button>
                </div>
            </div>
            <div className="productQty">
                <p>{cart?.product?.salePrice}</p>
            </div>
        </div>
    );
};

export default RenderCart;