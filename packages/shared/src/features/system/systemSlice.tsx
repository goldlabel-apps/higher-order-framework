import pJSON from "../../../package.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { social, clips, posts } from "../../__mocks__";

// @ts-ignore
const winSSR = window.ssr;
let ssr = null;
if (winSSR) ssr = winSSR;

export interface SystemShape {
  pJSON: any;
  systemError: any;
  appState: any;
  layout: any;
  fingerprint: any;
  flashInitted: any;
  notification: any;
  ssr: any;
  clips: any;
  posts: any;
  currentPostId: string;
  social: any;
  isMobile: any;
  ticking: boolean;
  nextHighestDepth: number;
  persona: any;
}

const initialState: SystemShape = {
  pJSON,
  systemError: null,

  fingerprint: {
    data: null,
    ipgeolocationLoading: false,
    ipgeolocationLoaded: false,
  },

  persona: {
    data: null,
    loading: false,
    loaded: false,
  },

  notification: null,
  ssr,
  clips,
  posts,
  currentPostId: "default",
  social,
  isMobile: false,
  ticking: false,
  nextHighestDepth: 10,
  flashInitted: false,
  layout: null,

  appState: {
    ticks: 0,
    route: "/",
    theme: "light",
  },
};

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<any>) => {
      state.appState = action.payload;
    },
    setTicking: (state, action: PayloadAction<boolean>) => {
      state.ticking = action.payload;
    },
    setNotification: (state, action: PayloadAction<any>) => {
      state.notification = action.payload;
    },
    setSystemError: (state, action: PayloadAction<any>) => {
      state.systemError = action.payload;
    },
    setIsMobile: (state, action: PayloadAction<any>) => {
      state.isMobile = action.payload;
    },
    setFlashInitted: (state, action: PayloadAction<boolean>) => {
      state.flashInitted = action.payload;
    },
    setLayout: (state, action: PayloadAction<any>) => {
      state.layout = action.payload;
    },
    setCurrentPostId: (state, action: PayloadAction<string>) => {
      state.currentPostId = action.payload;
    },
    setNextHighestDepth: (state, action: PayloadAction<number>) => {
      state.nextHighestDepth = action.payload;
    },
    setFingerprint: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state.fingerprint = {
        ...state.fingerprint,
        [key]: value,
      };
    },
    setPersona: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state.persona = {
        ...state.persona,
        [key]: value,
      };
    },
  },
});

export const {
  setSystemError,
  setAppState,
  setIsMobile,
  setNotification,
  setTicking,
  setFlashInitted,
  setLayout,
  setCurrentPostId,
  setNextHighestDepth,
  setFingerprint,
  setPersona,
} = systemSlice.actions;
export default systemSlice.reducer;
