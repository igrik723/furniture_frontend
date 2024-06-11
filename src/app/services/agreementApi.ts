import { METHODS } from "http";
import { Agreement } from "../types";
import { api } from "./api";

export const agreementApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createAgreement: builder.mutation<
            Agreement, {dateOfEnd: Date, userId: number}
        >({
            query: (agreementData) => ({
                url: '/agreements',
                method: 'POST',
                body: agreementData
            })
        }),
        getUserAgreement: builder.query<
           Agreement[], {userId: number} 
            >({
                query: (agreementData) => ({
                url: '/agreements',
                method: 'GET',
                body: agreementData
            })
        }),
        deleteAgreement: builder.mutation<
            void, string
        >({
            query: (id) => ({
                url: `/agreements/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const {
    useCreateAgreementMutation,
    useDeleteAgreementMutation,
    useGetUserAgreementQuery,
    useLazyGetUserAgreementQuery
} = agreementApi

export const {
    endpoints: {createAgreement, getUserAgreement, deleteAgreement}
} = agreementApi