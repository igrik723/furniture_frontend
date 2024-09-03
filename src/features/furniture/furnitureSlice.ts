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
        addModel: (state, action: PayloadAction<SearchList>) => {
            state.models.push(action.payload);
        },
        removeModel: (state, action: PayloadAction<number>) => {
            state.models = state.models.filter(model => model.id !== action.payload)
        }
    }
})

export const { addModel, removeModel } = selectedModelsSlice.actions;

export default selectedModelsSlice.reducer

