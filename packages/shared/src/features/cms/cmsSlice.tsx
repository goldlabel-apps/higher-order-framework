import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Cms {
    data: any
    bus: any
}

const initialState: Cms = {
    data: {
        shape: "Cms",
        collection: "posts",
    },
    bus: {},
}

export const cmsSlice = createSlice({
    name: "cms",
    initialState,
    reducers: {
        setCms: (state, action: PayloadAction<any>) => {
            const { key, value } = action.payload
            state.data = { ...state.data, [key]: value }
        },
        setNewBus: (state, action: PayloadAction<any>) => {
            const { key, value } = action.payload
            state.bus = { ...state.data, [key]: value }
        },
    },
})

export const { setCms, setNewBus } = cmsSlice.actions
export default cmsSlice.reducer
