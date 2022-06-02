import pJSON from '../../../package.json'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// @ts-ignore
const winSSR = window.ssr
let ssr = null
if (winSSR) ssr = winSSR

export interface SystemShape {
    pJSON: any
    data: any
}

const initialState: SystemShape = {
    pJSON,
    data: {
        systemError: null,
        persona: {
            data: null,
            loading: false,
            loaded: false,
            ipgeolocationLoading: false,
            ipgeolocationLoaded: false,
        },
        notification: null,
        ssr,
        currentPostId: "0",
        isMobile: false,
    },
}

export const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        setSystem: (state, action: PayloadAction<any>) => {
            const { key, value } = action.payload
            state.data = {
                ...state.data,
                [key]: value,
            }
        },
        
    },
})

export const {
    setSystem,
} = systemSlice.actions
export default systemSlice.reducer
