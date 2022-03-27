import { configureStore } from "@reduxjs/toolkit"
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"
import encryptionReducer from "./encryptionSlice"
import typeReducer from "./typesSlice"

const store = configureStore({
    reducer: {
        encryption: encryptionReducer,
        type: typeReducer
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store