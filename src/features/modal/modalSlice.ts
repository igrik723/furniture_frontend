import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
    isAuthModalOpen: boolean;
    isBasketModalOpen: boolean;
    isUserInfoModalOpen: boolean;
    isAddModelsModalOpen: boolean;
}

const initialState: ModalState = {
    isAuthModalOpen: false,
    isBasketModalOpen: false,
    isUserInfoModalOpen: false,
    isAddModelsModalOpen: false
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
        openAddModelsModal(state) {
            state.isAddModelsModalOpen = true
        },
        closeAddModelsModal(state) {
            state.isAddModelsModalOpen = false
        },

    }
})

export const { openAuthModal, closeAuthModal, openBasketModal, closeBasketModal, openUserInfoModal, closeUserInfoModal, openAddModelsModal, closeAddModelsModal } = modalSlice.actions;
export default modalSlice.reducer;