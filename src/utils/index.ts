import { IItem } from "../Models/IItems";

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const LOCAL_STORAGE_TITLE = "buoknoyar_items_basket";

export const TOKEN_TITLE = "accessToken";

export const getItemsFromLocalStorage = (): IItem[] => {
    const data = localStorage.getItem("items");
    return data ? JSON.parse(data) : [];
};
