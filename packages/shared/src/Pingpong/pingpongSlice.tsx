import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface PingpongShape {
    status: string
    fingerprint: string
    hostname: string
    device: string
    browser: string
    os: string
    ip: string
}

const initialState: PingpongShape = {
    status: 'notstarted',
    fingerprint: '',
    hostname: '',
    device: '',
    browser: '',
    os: '',
    ip: '',
}

export const pingpongSlice = createSlice({
    name: 'pingpong',
    initialState,
    reducers: {
        setPingpong: (state, action: PayloadAction<any>) => {
            const { key, value } = action.payload
            state[key] = value
        },
    },
})

export const { setPingpong } = pingpongSlice.actions
export const selectPingpong = (state: RootState) => state.pingpong

export default pingpongSlice.reducer
