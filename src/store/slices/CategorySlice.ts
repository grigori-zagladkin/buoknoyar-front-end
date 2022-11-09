import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ICategoryState } from "../../Models/ICategory";

const initialState: ICategoryState = {
    categories: [],
};

const CategorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export const selectCategories = (state: RootState) => state.category.categories;

export const { setCategories } = CategorySlice.actions;

export default CategorySlice.reducer;
