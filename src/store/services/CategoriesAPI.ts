import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategory } from "../../Models/ICategory";
import { BASE_URL } from "../../utils";

export const CategoriesAPI = createApi({
    reducerPath: "categories",
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    tagTypes: ["Categories"],
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}categories`,
    }),
    endpoints: (builder) => ({
        getAllCategories: builder.query<ICategory[], void>({
            query: () => ({
                url: ``,
            }),
            providesTags: ["Categories"],
        }),
    }),
});

export const { useGetAllCategoriesQuery } = CategoriesAPI;
