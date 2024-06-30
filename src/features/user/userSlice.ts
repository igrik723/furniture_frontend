import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    token: string | null;
    email: string | null;
    name: string | null;
    address: string | null,
    phoneNumber: string | null,
    role: string | null,
}

const initialState: UserState = {
    token: localStorage.getItem('token'),
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    address: localStorage.getItem('address'),
    phoneNumber: localStorage.getItem('phoneNumber'),
    role: localStorage.getItem('role')
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ token: string; email: string; name: string, address: string, phoneNumber: string, role: string }>) {
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.address = action.payload.address;
            state.phoneNumber = action.payload.phoneNumber;
            state.role = action.payload.role

            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('name', action.payload.name);
            localStorage.setItem('address', action.payload.address)
            localStorage.setItem('phoneNumber', action.payload.phoneNumber)
            localStorage.setItem('role', action.payload.role)
        },
        clearUser(state) {
            state.token = null;
            state.email = null;
            state.name = null;
            state.address = null;
            state.phoneNumber = null;
            state.role = null;

            localStorage.removeItem('token');
            localStorage.removeItem('email');
            localStorage.removeItem('name');
            localStorage.removeItem('address');
            localStorage.removeItem('phoneNumber')
            localStorage.removeItem('role')
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
