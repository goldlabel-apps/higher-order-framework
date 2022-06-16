import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface PingpongShape {
    data: any
}

const initialState: PingpongShape = {
    data: {
        stuff:123,
    },
}

export const pingpongSlice = createSlice({
    name: 'pingpong',
    initialState,
    reducers: {
        setPingpong: (state, action: PayloadAction<any>) => {
            const { key, value } = action.payload
            state.data = { ...state.data, [key]: value }
        },
    },
})

export const { setPingpong } = pingpongSlice.actions
export const selectPingpong = (state: RootState) => state.pingpong

export default pingpongSlice.reducer
