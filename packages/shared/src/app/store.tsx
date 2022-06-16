import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import coreReducer from '../features/core/coreSlice'
import cmsReducer from '../features/cms/cmsSlice'
import flashReducer from '../Flash/flashSlice'
import pingpongReducer from '../Pingpong/pingpongSlice'

export const store = configureStore({
    reducer: {
        core: coreReducer,
        cms: cmsReducer,
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
