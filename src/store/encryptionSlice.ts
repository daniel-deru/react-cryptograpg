import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export enum Encryptions {
    UNICODE,
    BINARY, 
    OCTAL,
    HEX, 
    MORSE, 
    ROMAN 
}

const initialState: Encryptions = Encryptions.UNICODE

const encryptionSlice = createSlice({
    name: "encryption",
    initialState,
    reducers: {
        setEncryption: (state: Encryptions, action: PayloadAction<Encryptions>): number => state = action.payload
    }
})

export const { setEncryption } = encryptionSlice.actions
export default encryptionSlice.reducer