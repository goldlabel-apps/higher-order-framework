import { getAuth, signOut } from "firebase/auth";
import { AppThunk } from "../../../app/store";
import { setSystemError, setPersona } from "../../../listingslab-shared";

export const unsignIn = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setPersona({ key: "blocked", value: true }));
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(setPersona({ key: "blocked", value: false }));
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
        dispatch(setPersona({ key: "blocked", value: false }));
        dispatch(setSystemError(error));
      });
  } catch (error) {
    dispatch(setSystemError(error));
  }
};
