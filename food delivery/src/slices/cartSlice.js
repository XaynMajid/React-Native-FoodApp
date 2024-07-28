import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {                       // reducers are the function for performing specific operations
state.items=[...state.items,action.payload]             //state.item is the old array of cart items and action.payload will be the new item adding in the end of array
    },
    removeFromCart: (state, action) => {
        let newCart =[...state.items]   //items array
        let itemIndex =state.items.findIndex(item=> item.id==action.payload.id) // finding the index of item that we wanted to remove
        if(itemIndex>=0){
newCart.splice(itemIndex,1)  // removing item
        }else{
            console.log("can't remove the item that is not added to the cart");
        }
state.items = newCart   //updating the cart after deleting an item
      },
      emptyCart: (state, action) => {
        state.items=[]
      },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,emptyCart } = cartSlice.actions      // exporting reducers functions
export const selectCartitems= state =>state.cart.items;
export const selectCartitemsById = (state,id) => state.cart.items.filter(item=> item.id==id);   // filtered array of all the items that matches this id    
export const selectCartTotal =state =>state.cart.items.reduce((total,item)=> total=total+item.price,0)  // it will iterate through all the items and                reduce((previous array value as total, current iteration item)=> )
export default cartSlice.reducer




