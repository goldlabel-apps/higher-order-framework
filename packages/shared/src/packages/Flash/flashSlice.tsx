import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { clips } from './'

export interface FlashShape {
    data: any
}

const initialState: FlashShape = {
    data: {
        movieClips: clips,
    },
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
export const selectMovieClips = (state: RootState) =>
    state.flash.data.movieClips

export default flashSlice.reducer
