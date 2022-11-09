import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { CategoriesAPI } from "./services/CategoriesAPI";
import { ItemsAPI } from "./services/ItemsAPI";
import { ServiceAPI } from "./services/ServiceAPI";
import BasketSlice from "./slices/BasketSlice";
import CategorySlice from "./slices/CategorySlice";
import ItemsSlice from "./slices/ItemsSlice";
import ServiceSlice from "./slices/ServiceSlice";

const rootReducer = combineReducers({
    category: CategorySlice,
    item: ItemsSlice,
    services: ServiceSlice,
    basket: BasketSlice,
    [ItemsAPI.reducerPath]: ItemsAPI.reducer,
    [ServiceAPI.reducerPath]: ServiceAPI.reducer,
    [CategoriesAPI.reducerPath]: CategoriesAPI.reducer,
});

const middlewares = [ItemsAPI.middleware, ServiceAPI.middleware, CategoriesAPI.middleware];

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
    });
};

setupListeners(setupStore().dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
