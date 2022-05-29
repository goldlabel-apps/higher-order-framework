import { AppThunk } from '../../../app/store'
import { setAppState, setSystemError } from '../'

export const tick = (): AppThunk => async (dispatch: any, getState: any) => {
    try {
        const state = getState()
        const ticks = state.system.appState.ticks
        dispatch(
            setAppState({
                ...state.system.appState,
                ticks: ticks + 1,
            })
        )
    } catch (error) {
        dispatch(setSystemError(error))
    }
}
