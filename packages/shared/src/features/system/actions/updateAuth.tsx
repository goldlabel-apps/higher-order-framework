import { AppThunk } from "../../../app/store";
import { setSystemError } from "../";

export const updateAuth =
  (key: string, value: any): AppThunk =>
  async (dispatch: any, getState: any) => {
    try {
      // dispatch(
      //   setAdmin({
      //     ...getState().system.admin,
      //     [key]: value,
      //   })
      // );
    } catch (error) {
      dispatch(setSystemError(error));
    }
  };
