import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import adminReducer from '../features/admin/adminSlice'
import coreReducer from '../features/core/coreSlice'
import personaReducer from '../features/persona/personaSlice'
import cmsReducer from '../features/cms/cmsSlice'
import systemReducer from '../features/system/systemSlice'

export const store = configureStore({
    reducer: {
        admin: adminReducer,
        core: coreReducer,
        cms: cmsReducer,
        persona: personaReducer,
        system: systemReducer,
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
