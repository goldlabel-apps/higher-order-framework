import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AppThunk } from "../../../app/store";
import {
  setSystemError,
  setCore,
  setPersona,
} from "../../../listingslab-shared";

export const signIn =
  (email: string, password: string): AppThunk =>
  async (dispatch: any) => {
    try {
      const auth = getAuth();
      dispatch(setPersona({ key: "user", value: { uid: null } }));
      dispatch(setPersona({ key: "blocked", value: true }));
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const newUser = {
            uid: userCredential.user.uid,
          };
          dispatch(setPersona({ key: "user", value: newUser }));
          dispatch(setCore({ key: "dialogSigninOpen", value: false }));
          dispatch(setPersona({ key: "blocked", value: false }));
        })
        .catch((error) => {
          dispatch(setSystemError(error));
          dispatch(setPersona({ key: "blocked", value: false }));
        });
    } catch (error) {
      dispatch(setSystemError(error));
    }
  };
