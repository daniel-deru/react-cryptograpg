import { configureStore } from "@reduxjs/toolkit"
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"

const store = configureStore({
    reducer: {

    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store