import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface FlashShape {
    data: any
}

const initialState: FlashShape = {
    data: {},
}

export const flashSlice = createSlice({
    name: 'flash',
    initialState,
    reducers: {
        setFlash: (state, action: PayloadAction<any>) => {
            const { key, value } = action.payload
            state.data = { ...state.data, [key]: value }
        },
    },
})

export const { setFlash } = flashSlice.actions
export const selectFlash = (state: RootState) => state.flash
export default flashSlice.reducer
