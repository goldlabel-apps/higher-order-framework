import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { navigator } from './data/navigator'

// @ts-ignore
const winSSR = window.ssr
let ssr = null
if (winSSR) ssr = winSSR

export interface CoreShape {
    slug: string
    data: any
}

const initialState: CoreShape = {
    slug: 'coreSlice',
    data: {
        ssr,
        navigator,
        fullScreen: false,
        cmsDialogOpen: false,
        uid: null,
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
