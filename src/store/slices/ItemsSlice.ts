import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IItemState } from "../../Models/IItems";

const initialState: IItemState = {
    items: [],
    activeCategory: 0,
    search: {
        page: 1,
        limit: 30,
        title: "",
        categoryId: 1,
    },
};

const ItemsSlice = createSlice({
    name: "itemsSlice",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.search.page = action.payload;
        },
        setLimit: (state, action) => {
            state.search.limit = action.payload;
        },
        setTitle: (state, action) => {
            state.search.title = action.payload;
        },
        setCategoryId: (state, action) => {
            state.search.categoryId = action.payload;
        },
    },
});

export const selectSearchTitle = (state: RootState) => state.item.search.title;
export const selectActiveCatrgory = (state: RootState) => state.item.activeCategory;
export const selectItems = (state: RootState) => state.item.items;

export const { setItems, setActiveCategory, setCurrentPage, setLimit, setTitle, setCategoryId } = ItemsSlice.actions;

export default ItemsSlice.reducer;
