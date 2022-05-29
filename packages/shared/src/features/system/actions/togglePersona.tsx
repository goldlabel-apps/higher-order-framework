import { AppThunk } from '../../../app/store'
import { setAppState, setSystemError } from '../'

export const togglePersona =
    (open: boolean): AppThunk =>
    async (dispatch: any, getState: any) => {
        try {
            const state = getState()
            const newAppState = {
                ...state.system.appState,
                persona: {
                    ...state.system.appState.persona,
                    open,
                },
            }
            dispatch(setAppState(newAppState))
        } catch (error) {
            dispatch(setSystemError(error))
        }
    }
