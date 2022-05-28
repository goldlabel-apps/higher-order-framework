import { getAuth, signOut } from "firebase/auth";
import { AppThunk } from "../../../app/store";
import { setSystemError, setPersona } from "../../../listingslab-shared";

export const unsignIn = (): AppThunk => async (dispatch: any) => {
  try {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(
          setPersona({
            key: "user",
            value: {
              uid: null,
            },
          })
        );
      })
      .catch((error) => {
        dispatch(setSystemError(error));
      });
  } catch (error) {
    dispatch(setSystemError(error));
  }
};
