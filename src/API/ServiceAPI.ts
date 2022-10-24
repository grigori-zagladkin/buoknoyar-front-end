import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IService } from "../models/IService";

export const ServiceAPI = createApi({
    reducerPath: "ServiceAPI",
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    tagTypes: ["Services"],
    baseQuery: fetchBaseQuery({
        baseUrl: "",
    }),
    endpoints: (builder) => ({
        getAllService: builder.query<IService[], void>({
            query: () => ({
                url: ``,
            }),
        }),
        getServiceById: builder.query<IService, number>({
            query: (id) => ({
                url: `/id`,
            }),
        }),
    }),
});

export const { useGetAllServiceQuery, useGetServiceByIdQuery } = ServiceAPI;
