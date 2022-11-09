import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IItem, ISearch } from "../../Models/IItems";
import { BASE_URL } from "../../utils";

export const ItemsAPI = createApi({
    reducerPath: "ItemsAPI",
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}items`,
    }),
    endpoints: (builder) => ({
        getAllItems: builder.query<IItem[], void>({
            query: () => ({
                url: ``,
            }),
        }),
        getItemById: builder.query<IItem, number>({
            query: (id) => ({
                url: `/${id}`,
            }),
        }),
    }),
});

export const { useGetAllItemsQuery, useGetItemByIdQuery } = ItemsAPI;
