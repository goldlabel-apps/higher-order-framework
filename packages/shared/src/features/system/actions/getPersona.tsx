import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";
import { AppThunk } from "../../../app/store";
import { setSystemError, setPersona } from "../";
import { fingerprintJSConfig } from "../../../env";

export const getPersona = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setPersona({ key: "loading", value: true }));
    const { apiKey } = fingerprintJSConfig;

    const fpPromise = FingerprintJS.load({
      apiKey,
      region: "eu",
    });
    fpPromise
      .then((fp) => fp.get())
      .then((result) => {
        dispatch(setPersona({ key: "data", value: result.visitorId }));
        dispatch(setPersona({ key: "loading", value: false }));
        dispatch(setPersona({ key: "loaded", value: false }));
      });
  } catch (error) {
    dispatch(setSystemError(error));
  }
};
