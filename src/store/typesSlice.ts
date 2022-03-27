import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export enum Code { ENCODE, DECODE }

const initialState: Code = Code.ENCODE

const typeSlice = createSlice({
    name: "type",
    initialState,
    reducers: {
        setCodeType: (state: Code, action: PayloadAction<Code>): number => state = action.payload
    }
})

export const { setCodeType } = typeSlice.actions
export default typeSlice.reducer