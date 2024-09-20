import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TableState {
  id: number;
  furnitureName: string;
  furnitureType: string;
  Property: string;
  Price: number;
  count: number;
  imageUrl: string;
}

interface TablesState {
    tables: TableState[];
}

const initialState: TablesState = {
    tables: []
}
const tableSlice = createSlice({
    name: 'tables',
    initialState,
    reducers: {
        setTables: (state, action: PayloadAction<TableState[]>) => {
            state.tables = action.payload
        },

        addTable: (state, action: PayloadAction<TableState>) => {
            state.tables.push(action.payload)
        },

        editTableCount: (state, action: PayloadAction<{ id: number;  count: number}>) => {
            state.tables.map(table => table.id === action.payload.id ? table.count = action.payload.count : table)
        },

        removeTable: (state, action: PayloadAction<number>) => {
            state.tables = state.tables.filter(table => table.id !== action.payload)
        }
    }
})

export const { setTables, addTable, editTableCount, removeTable} = tableSlice.actions;

export default tableSlice.reducer; 
