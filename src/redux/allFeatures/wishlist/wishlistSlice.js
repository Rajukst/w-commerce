import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    wishlistItems: localStorage.getItem('wishlistItems')? JSON.parse(localStorage.getItem('wishlistItems')): [],
  };

const wishlistSlice= createSlice({
    name: "wishlists",
  initialState,
  reducers:{

 // add to cart
 addToWishlist: (state, action) => {
//    console.log("consoling",action.payload)
let existingWishlistItemIndex = state.wishlistItems?.findIndex(item=> item._id===action.payload?._id)
if (existingWishlistItemIndex){
    toast.error("The item has already been added to the wishlist")
}
else{
    let firstWishlist= {...action.payload}
    state.wishlistItems?.push(firstWishlist);
    localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));  
    toast.success("The item has been added to the wishlist")
}

let firstWishlist= {...action.payload}
    state.wishlistItems?.push(firstWishlist);
    localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
  },

  clearAllWishlists: (state, action) => {
    state.wishlistItems = [];
  },
  removeWishListItem: (state, action) => {

  },

}

})
export const {addToWishlist, clearAllWishlists, removeWishListItem}= wishlistSlice.actions
export default wishlistSlice.reducer;