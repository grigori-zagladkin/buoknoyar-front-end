import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IServiceState } from "../../Models/IService";

const initialState: IServiceState = {
    services: [],
};

const ServiceSlice = createSlice({
    name: "ServiceSlice",
    initialState,
    reducers: {
        setServices: (state, action) => {
            state.services = action.payload;
        },
    },
});

export const selectServices = (state: RootState) => state.service.services;
export const selectServiceById = (id: number) => (state: RootState) =>
    state.service.services.find((item) => item.id === id);

export const { setServices } = ServiceSlice.actions;

export default ServiceSlice.reducer;
