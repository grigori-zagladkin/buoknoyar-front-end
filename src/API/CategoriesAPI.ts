import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategory } from "../models/ICategory";

const CategoriesAPI = createApi({
    reducerPath: "CategoriesAPI",
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    tagTypes: ["Categories"],
    baseQuery: fetchBaseQuery({
        baseUrl: "",
    }),
    endpoints: (builder) => ({
        getAllCategories: builder.query<ICategory[], void>({
            query: () => ({
                url: ``,
            }),
        }),
    }),
});

export const { useGetAllCategoriesQuery } = CategoriesAPI;
