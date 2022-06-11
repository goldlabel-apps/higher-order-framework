import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Cms {
    data: any
}

const initialState: Cms = {
    data: {
        shape: 'Cms',
        
    },
}

export const cmsSlice = createSlice({
    name: 'cms',
    initialState,
    reducers: {
        setCms: (state, action: PayloadAction<any>) => {
            const { key, value } = action.payload
            state.data = { ...state.data, [key]: value }
        },
    },
})

export const { setCms } = cmsSlice.actions

export default cmsSlice.reducer
