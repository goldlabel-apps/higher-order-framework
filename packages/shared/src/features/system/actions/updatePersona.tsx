import { AppThunk } from "../../../app/store";
import { setAppState, setSystemError } from "../";

export const updatePersona =
  (key: string, value: any): AppThunk =>
  async (dispatch: any, getState: any) => {
    try {
      const state = getState();
      const newAppState = {
        ...state.system.appState,
        persona: {
          ...state.system.appState.persona,
          [key]: value,
        },
      };
      dispatch(setAppState(newAppState));
    } catch (error) {
      dispatch(setSystemError(error));
    }
  };
