import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import modalReducer from "../features/modal/modalSlice";
import userReducer from "../features/user/userSlice"
import basketReducer from "../features/furniture/basketSlice"
import tableReducer from "../features/furniture/tableSlice";
import cabinetReducer from "../features/furniture/cabinetSlice";
import cupboardReducer from "../features/furniture/cupboardSlice";






export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        modal: modalReducer,
        user: userReducer,
        basket: basketReducer,
        tables: tableReducer,
        cabinets: cabinetReducer,
        cupboards: cupboardReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action<string>
>