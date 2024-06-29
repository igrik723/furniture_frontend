import { api } from "./api";

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<
            { token: string, name: string, email: string, address: string, phoneNumber: string },
            { email: string; password: string }
        >({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData
            })
        }),
        register: builder.mutation<
            { token: string, email: string, name: string, address: string, phoneNumber: string  },
            { email: string; password: string; name: string; address: string; phoneNumber: string }
        >({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData
            })
        })
    })
})

export const {
    useRegisterMutation,
    useLoginMutation
} = userApi;

export const {
    endpoints: { login, register }
} = userApi;
