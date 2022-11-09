import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IService } from "../../Models/IService";
import { BASE_URL } from "../../utils";

export const ServiceAPI = createApi({
    reducerPath: "service",
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    tagTypes: ["Services"],
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}services`,
    }),
    endpoints: (builder) => ({
        getAllService: builder.query<IService[], void>({
            query: () => ({
                url: ``,
            }),
            providesTags: ["Services"],
        }),
        getServiceById: builder.query<IService, number>({
            query: (id) => ({
                url: `/${id}`,
            }),
            providesTags: (result) => [{ type: "Services", id: result!.id }],
        }),
    }),
});

export const { useGetAllServiceQuery, useGetServiceByIdQuery } = ServiceAPI;
