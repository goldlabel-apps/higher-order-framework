import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AdminShape {
    data: any
    bus: any
}

const initialState: AdminShape = {
    bus: {},
    data: {
        collection: 'posts',
        mode: 'read',
    },
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdmin: (state, action: PayloadAction<any>) => {
            const { key, value } = action.payload
            state.data = { ...state.data, [key]: value }
        },
        setDataBus: (state, action: PayloadAction<any>) => {
            const { key, value } = action.payload
            state.bus[key] = value
        },
        updateDataBus: (state, action: PayloadAction<any>) => {
            const { collectionName, key, value } = action.payload
            state.bus[collectionName] = {
                ...state.bus[collectionName],
                [key]: value,
            }
        },
    },
})

export const { setAdmin, setDataBus, updateDataBus } = adminSlice.actions
export default adminSlice.reducer
