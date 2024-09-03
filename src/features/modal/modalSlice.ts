import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
    isAuthModalOpen: boolean;
    isBasketModalOpen: boolean;
    isUserInfoModalOpen: boolean;
    isAddModelsModalOpen: boolean;
    isErrorsModalOpen: boolean;
    isUpdateModalOpen: boolean;
}

const initialState: ModalState = {
    isAuthModalOpen: false,
    isBasketModalOpen: false,
    isUserInfoModalOpen: false,
    isAddModelsModalOpen: false,
    isErrorsModalOpen: false,
    isUpdateModalOpen: false,
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
        openErrorsModal(state) {
            state.isErrorsModalOpen = true
        },
        closeErrorsModal(state) {
            state.isErrorsModalOpen = false
        },
        openUpdateModal(state) {
            state.isUpdateModalOpen = true
        },
        closeUpdateModal(state) {
            state.isUpdateModalOpen = false
        },

    }
})

export const {
    openAuthModal,
    closeAuthModal,
    openBasketModal,
    closeBasketModal,
    openUserInfoModal, 
    closeUserInfoModal, 
    openAddModelsModal, 
    closeAddModelsModal, 
    openErrorsModal, 
    closeErrorsModal,
    openUpdateModal,
    closeUpdateModal,
} = modalSlice.actions;
export default modalSlice.reducer;