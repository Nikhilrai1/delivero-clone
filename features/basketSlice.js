import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            let newBasket = [...state.items];
           state.items.forEach((item,idx) => {
            if(item.id === action.payload.id){
                newBasket.splice(idx,1)
                state.items = newBasket;
            }
           })
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketTotal = (state) => state.basket.items.reduce((total,item) => total+=item.price ,0)
export const selectBasketItemsWithId = (state, id) => state.basket.items.filter(item => item.id === id)
export default basketSlice.reducer