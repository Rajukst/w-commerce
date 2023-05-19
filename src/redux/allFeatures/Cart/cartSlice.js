import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): [],
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      // finding the cart items exists in our cart or not
      const existingCartProductIndex = state.cartItems.findIndex(
        (item) => item?.product?._id === action.payload?.product?._id
        );
      if (existingCartProductIndex>=0) {
        state.cartItems[existingCartProductIndex].qty+=1;
      }
      else {
          // adding new cart item to cart
        let assembledItm;
        // this is the detail quantity given by the user
        if(action.payload.qty>1){
            assembledItm= {...action.payload, qty:action.payload.qty};
            state.cartItems.push(assembledItm);
        }
        else{
            assembledItm= {...action.payload, qty:1}
            state.cartItems.push(assembledItm);
        }
        // sending the cart items into local storage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));   
      }
    },
    removeItem: (state, action) => {
      const updatedCartItems = state.cartItems.filter((item) => item?.product?._id!==action.payload?.product?._id);
      state.cartItems = updatedCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearAllCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // calculate subtotal cart items
    calculateTotalAmount: (state, action) => {
      let subTotal= state.cartItems.reduce((acc, item) => acc + (item.product?.salePrice * item.qty),0);
      state.cartTotalAmount = subTotal;
    },
    incrementQty: (state, action) => {
      const existingCartProductIndex = state.cartItems.findIndex(
        (item) => item?.product?._id === action.payload?.product?._id
        );
        if (existingCartProductIndex>=0) {
          console.log("incrementing", action.payload)
          state.cartItems[existingCartProductIndex].qty+=1;
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    },
    decrementQty: (state, action) => {
      const existingCartProductIndex = state.cartItems.findIndex(
        (item) => item?.product?._id === action.payload?.product?._id
        );
        if (existingCartProductIndex>=0) {
          console.log("incrementing", action.payload)
          state.cartItems[existingCartProductIndex].qty-=1;
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
        if(state.cartItems[existingCartProductIndex].qty===0) {
          state.cartItems.splice(existingCartProductIndex,1)
        }
    },
  },
});
export const {
  addToCart,
 clearAllCart,
 removeItem,
  incrementQty,
  decrementQty,
  calculateTotalAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
