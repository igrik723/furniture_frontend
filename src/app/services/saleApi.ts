import { Sale } from "../types";
import { api } from "./api";

export const saleApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createSale: builder.mutation<Sale, { agrenemtId: number; furnitureId: number; count: number }
        >({
            query: (saleData) => ({
                url: '/sale',
                method: 'POST',
                body: saleData
            }) 
        }),
        deleteSale: builder.mutation<
            void, string
        >({
            query: (id) => ({
                url: `/sale/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const {
    useCreateSaleMutation,
    useDeleteSaleMutation
} = saleApi

export const {
    endpoints: {createSale, deleteSale}
} = saleApi