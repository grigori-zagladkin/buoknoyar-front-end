import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IItem } from "../../Models/IItems";
import { getItemsFromLocalStorage } from "../../utils";

interface IBasketState {
    items: Array<IItem>;
}

const initialState: IBasketState = {
    items: getItemsFromLocalStorage(),
};

const BasketSlice = createSlice({
    name: "BasketSlice",
    initialState,
    reducers: {
        addItemToBasket: (state, action: PayloadAction<IItem>) => {
            state.items.push(action.payload);
        },
        removeItemFromBasket: (state, action: PayloadAction<number>) => {
            state.items.filter((item) => item.id !== action.payload);
        },
        setItemsInBasket: (state, action: PayloadAction<Array<IItem>>) => {
            state.items = action.payload;
        },
        removeItemsInBasket: (state, action) => {
            state.items = [];
        },
    },
});

export const selectItemsInBasket = (state: RootState) => state.basket.items;

export const { addItemToBasket, removeItemFromBasket, setItemsInBasket, removeItemsInBasket } = BasketSlice.actions;

export default BasketSlice.reducer;
