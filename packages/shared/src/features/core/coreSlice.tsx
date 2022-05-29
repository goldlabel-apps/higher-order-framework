import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CoreShape {
    slug: string
    data: any
}

const initialState: CoreShape = {
    slug: 'coreSlice',
    data: {
        dialogSigninOpen: false,
    },
}

export const personaSlice = createSlice({
    name: 'core',
    initialState,
    reducers: {
        setCore: (state, action: PayloadAction<any>) => {
            const { key, value } = action.payload
            state.data = {
                ...state.data,
                [key]: value,
            }
        },
    },
})

export const { setCore } = personaSlice.actions

export default personaSlice.reducer
