import { RootState } from "../../app/store";
import Persona from "./Persona";
import DialogSignin from "./components/DialogSignin";

import { setPersona } from "./personaSlice";
import { getFingerprint } from "./actions/getFingerprint";
import { getLocation } from "./actions/getLocation";
import { getDevice } from "./actions/getDevice";
import { signIn } from "./actions/signIn";
import { unsignIn } from "./actions/unsignIn";

export const selectPersona = (state: RootState) => state.persona;
export {
  Persona,
  DialogSignin,
  setPersona,
  getFingerprint,
  getLocation,
  getDevice,
  signIn,
  unsignIn,
};