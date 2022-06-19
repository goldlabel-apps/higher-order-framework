import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import coreReducer from '../packages/core/coreSlice'
import adminReducer from '../packages/admin/adminSlice'
import flashReducer from '../packages/flash/flashSlice'
import pingpongReducer from '../packages/pingpong/pingpongSlice'

export const store = configureStore({
    reducer: {
        core: coreReducer,
        admin: adminReducer,
        flash: flashReducer,
        pingpong: pingpongReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
