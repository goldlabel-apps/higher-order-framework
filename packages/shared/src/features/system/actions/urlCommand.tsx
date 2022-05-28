import { AppThunk } from "../../../app/store";
import { setSystemError } from "../";

export interface CommandShape {
  route: string;
}

export const urlCommand =
  (command: CommandShape): AppThunk =>
  async (dispatch: any, getState: any) => {
    try {
      console.warn("urlCommand", command);
    } catch (error) {
      dispatch(setSystemError(error));
    }
  };
