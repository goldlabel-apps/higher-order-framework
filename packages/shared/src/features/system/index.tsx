import { RootState } from "../../app/store";
import {
  setAppState,
  setIsMobile,
  setSystemError,
  setNotification,
  setTicking,
  setFlashInitted,
  setLayout,
  setCurrentPostId,
  setNextHighestDepth,
  setFingerprint,
  setPersona,
} from "./systemSlice";

import {
  notify,
  navigateTo,
  routeTo,
  togglePersona,
  toggleAdmin,
  updatePersona,
  tick,
  updateLayout,
  urlCommand,
  getIpgeolocation,
  getPersona,
} from "./actions";

export {
  setPersona,
  getPersona,
  setFingerprint,
  routeTo,
  urlCommand,
  notify,
  navigateTo,
  setIsMobile,
  setAppState,
  getIpgeolocation,
  setNotification,
  setNextHighestDepth,
  setSystemError,
  setCurrentPostId,
  setFlashInitted,
  setLayout,
  setTicking,
  togglePersona,
  toggleAdmin,
  updatePersona,
  tick,
  updateLayout,
};

export const selectPJSON = (state: RootState) => state.system.pJSON;
export const selectAppState = (state: RootState) => state.system.appState;
export const selectFingerprint = (state: RootState) => state.system.fingerprint;
export const selectSystemError = (state: RootState) => state.system.systemError;
export const selectSocial = (state: RootState) => state.system.social;
export const selectIsMobile = (state: RootState) => state.system.isMobile;
export const selectSSR = (state: RootState) => state.system.ssr;
export const selectTicking = (state: RootState) => state.system.ticking;
export const selectClips = (state: RootState) => state.system.clips;
export const selectLayout = (state: RootState) => state.system.layout;
export const selectPersona = (state: RootState) => state.system.persona;

export const selectNotification = (state: RootState) =>
  state.system.notification;

export const selectFlashInitted = (state: RootState) =>
  state.system.flashInitted;
export const selectPosts = (state: RootState) => state.system.posts;
export const selectCurrentPostId = (state: RootState) =>
  state.system.currentPostId;
