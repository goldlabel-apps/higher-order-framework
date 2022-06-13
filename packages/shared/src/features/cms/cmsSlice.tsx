import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CmsShape {
    data: any
    bus: any
}

const initialState: CmsShape = {
    bus: {},
    data: {
        // collection: "posts",
        // mode: "manange",
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

export const { setCms, setDataBus, updateDataBus } = cmsSlice.actions
export default cmsSlice.reducer
