import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AppThunk } from "../../../app/store";
import { setSystemError /*notify, updateAuth*/ } from "../";

export const signOut = (): AppThunk => async (dispatch: any) => {
  try {
    const auth = getAuth();
    console.warn("Signing Out...");
  } catch (error) {
    dispatch(setSystemError(error));
  }
};

/*
 // @ts-ignore
 signOut(auth)
 .then(() => {
   // dispatch(updateAuth("uid", null));
   console.warn("Signed Out.");
 })
 .catch((error) => {
   console.warn("NOT Signed Out.", error);
   // dispatch( notify({ code: "oAuth 101", message: error.message, severity: "error" }));
 });

 */
