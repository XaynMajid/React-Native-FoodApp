import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './slices/cartSlice'
import restaurantSlice from './slices/restaurantSlice' // first i import it like {restaurantSlice}  it was giving an error then i remove it and now its working fine 

export const store = configureStore({
  reducer: {
cart:cartSlice,
restaurant:restaurantSlice
  },
})