import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CupboardState {
    id: number;
    furnitureName: string;
    furnitureType: string;
    Property: string;
    Price: number;
    count: number;
    imageUrl: string
}

interface CupboardsState {
    cupboards: CupboardState[]
}

const initialState: CupboardsState = {
    cupboards: []
}

const cupboardSlice = createSlice({
    name: 'cupboards',
    initialState,
    reducers: {
       setCupboards: (state, action: PayloadAction<CupboardState[]>) => {
            state.cupboards = action.payload
        },

        addCupboard: (state, action: PayloadAction<CupboardState>) => {
            state.cupboards.push(action.payload)
        },

        editCupboardCount: (state, action: PayloadAction<{ id: number;  count: number}>) => {
            state.cupboards.map(cupboard => cupboard.id === action.payload.id ? cupboard.count = action.payload.count : cupboard)
        },

        removeCupboard: (state, action: PayloadAction<number>) => {
            state.cupboards = state.cupboards.filter(cupboard => cupboard.id !== action.payload)
        } 
    }
})

export const { setCupboards, addCupboard, editCupboardCount, removeCupboard } = cupboardSlice.actions

export default cupboardSlice.reducer