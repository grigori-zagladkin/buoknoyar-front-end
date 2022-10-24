import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IItem } from "../models/IItems";

export const ItemsAPI = createApi({
    reducerPath: "ItemsAPI",
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    tagTypes: ["Items"],
    baseQuery: fetchBaseQuery({
        baseUrl: ``,
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
