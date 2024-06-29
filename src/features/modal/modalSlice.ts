import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
    isAuthModalOpen: boolean;
    isBasketModalOpen: boolean;
    isUserInfoModalOpen: boolean;
}

const initialState: ModalState = {
    isAuthModalOpen: false,
    isBasketModalOpen: false,
    isUserInfoModalOpen: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openAuthModal(state) {
            state.isAuthModalOpen = true
        },
        closeAuthModal(state) {
            state.isAuthModalOpen = false
        },
        openBasketModal(state) {
            state.isBasketModalOpen = true
        },
        closeBasketModal(state) {
            state.isBasketModalOpen = false
        },
        openUserInfoModal(state) {
            state.isUserInfoModalOpen = true
        },
        closeUserInfoModal(state) {
            state.isUserInfoModalOpen = false
        },

    }
})

export const { openAuthModal, closeAuthModal, openBasketModal, closeBasketModal, openUserInfoModal, closeUserInfoModal } = modalSlice.actions;
export default modalSlice.reducer;