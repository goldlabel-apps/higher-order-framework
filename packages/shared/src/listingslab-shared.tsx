import PJSON from "../package.json";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { store } from "./app/store";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { getById } from "./app/utils";
import Shared from "./Shared";
import Renderer from "./Renderer";
import App from "./App";

import MaxiButton from "./components/MaxiButton";
import Home from "./components/Home";
import Navigator from "./components/Navigator";
import MiniButton from "./components/MiniButton";
import FeaturedImage from "./components/FeaturedImage";
import {
  Social,
  Blocked,
  InputPassword,
  InputText,
  InputSubmit,
  Notification,
  NaviCrumb,
  Post,
  Map,
  HideShow,
  Thumb,
  MetaButton,
} from "./components";

import { selectContent, setContent } from "./features/content";

import {
  AdminMenu,
  CMS,
  selectAdmin,
  setAdmin,
} from "./features/admin";

import {
  Persona,
  DialogSignin,
  selectPersona,
  setPersona,
  signIn,
  unsignIn,
} from "./features/persona";

import { selectCore, setCore } from "./features/core";

import {
  selectPJSON,
  selectFlashInitted,
  selectAppState,
  selectSocial,
  setLayout,
  setFingerprint,
  updateLayout,
  setSystemError,
  setFlashInitted,
  selectLayout,
  selectNotification,
  selectSSR,
  setTicking,
  setAppState,
  navigateTo,
  togglePersona,
  toggleAdmin,
  selectIsMobile,
  selectTicking,
  selectClips,
  selectPosts,
  selectFingerprint,
  getIpgeolocation,
  routeTo,
  notify,
  urlCommand,
  setNextHighestDepth,
  tick,
} from "./features/system";
import { Icon, getDesignTokens } from "./theme";

console.warn("hof", PJSON.version);

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Shared,
  errorBoundary(err, info, props) {
    console.warn("shared", err, info, props);
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

export {
  selectContent,
  setContent,
  Renderer,
  Map,
  Post,
  store,
  useAppDispatch,
  useAppSelector,
  selectAppState,
  setSystemError,
  getIpgeolocation,
  selectFlashInitted,
  setTicking,
  setAppState,
  setLayout,
  selectPJSON,
  selectIsMobile,
  selectSocial,
  selectFingerprint,
  selectTicking,
  togglePersona,
  navigateTo,
  getDesignTokens,
  Icon,
  Social,
  InputPassword,
  InputSubmit,
  Notification,
  selectClips,
  selectPosts,
  HideShow,
  NaviCrumb,
  updateLayout,
  routeTo,
  urlCommand,
  Thumb,
  toggleAdmin,
  selectLayout,
  selectSSR,
  setFingerprint,
  setNextHighestDepth,
  InputText,
  signIn,
  unsignIn,
  tick,
  setFlashInitted,
  selectNotification,
  notify,
  getById,
  App,
  Navigator,
  FeaturedImage,
  MetaButton,
  MiniButton,
  MaxiButton,
  Persona,
  setPersona,
  selectPersona,
  selectCore,
  setCore,
  DialogSignin,
  Home,
  Blocked,
  CMS,
  selectAdmin,
  setAdmin,
  AdminMenu,
};
