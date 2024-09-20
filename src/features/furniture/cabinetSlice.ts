import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CabinetState {
    id: number;
    furnitureName: string;
    furnitureType: string;
    Property: string;
    Price: number;
    count: number;
    imageUrl: string
}

interface CabinetsState {
    cabinets: CabinetState[]
}

const initialState: CabinetsState = {
    cabinets: []
}

const cabinetSlice = createSlice({
    name: 'cabinets',
    initialState,
    reducers: {
        setCabinets: (state, action: PayloadAction<CabinetState[]>) => {
            state.cabinets = action.payload
        },

        addCabinet: (state, action: PayloadAction<CabinetState>) => {
            state.cabinets.push(action.payload)
        },

        editCabinetCount: (state, action: PayloadAction<{ id: number; count: number }>) => {
            state.cabinets.map(cabinet => cabinet.id === action.payload.id ? cabinet.count = action.payload.count : cabinet)
        },

        removeCabinet: (state, action: PayloadAction<number>) => {
            state.cabinets = state.cabinets.filter(cabinet => cabinet.id !== action.payload)
        }
    }
})

export const {setCabinets, addCabinet, editCabinetCount, removeCabinet} = cabinetSlice.actions

export default cabinetSlice.reducer