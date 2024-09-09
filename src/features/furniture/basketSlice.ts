import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SearchList from "../../components/UI/SearchList/SearchList";
import { RootState } from '../../app/store';

interface SelectedModelsState {
    models: SearchList[]
}

const initialState: SelectedModelsState = {
    models: []
}

export const selectedModelsSlice = createSlice({
    name: 'selectedModels',
    initialState,
    reducers: {
        addModelToBasket: (state, action: PayloadAction<SearchList>) => {
            state.models.push(action.payload);
        },
        removeModelFromBasket: (state, action: PayloadAction<number>) => {
            state.models = state.models.filter(model => model.id !== action.payload)
        }
    }
})

export const { addModelToBasket, removeModelFromBasket } = selectedModelsSlice.actions;

export default selectedModelsSlice.reducer

