import PJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import { store } from './app/store'
import { useAppSelector, useAppDispatch } from './app/hooks'
import { getById } from './app/utils'
import Shared from './Shared'
import Renderer from './Renderer'
import MaxiButton from './components/MaxiButton'
import Landing from './components/Landing'
import Navigator from './components/Navigator'
import MiniButton from './components/MiniButton'
import FeaturedImage from './components/FeaturedImage'
import OnTheMap from './components/OnTheMap'
import TitleMovie from './components/TitleMovie'

import {
    Flash,
    MovieClip,
    initFlash,
    setFlash,
    selectFlash,
    getDisplay,
    getNextHighestDepth,
} from './Flash'

import { Social, Blocked, Map, MetaButton, FindUs } from './components'

import {
    DialogSignin,
    AdminMenu,
    CMS,
    selectAdmin,
    setAdmin,
} from './features/admin'

import { selectCms, setCms, cmsRead } from './features/cms'

import {
    Persona,
    selectPersona,
    setPersona,
    signIn,
    unsignIn,
} from './features/persona'

import { selectCore, setCore, navClick, navigateTo } from './features/core'

import { Icon, getDesignTokens } from './theme'

console.warn('hof', PJSON.version)

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Shared,
    errorBoundary(err, info, props) {
        console.warn('shared', err, info, props)
        return null
    },
})

export const { bootstrap, mount, unmount } = lifecycles

export {
    Renderer,
    Map,
    store,
    useAppDispatch,
    useAppSelector,
    getDesignTokens,
    Icon,
    Social,
    signIn,
    unsignIn,
    getById,
    Navigator,
    FeaturedImage,
    MetaButton,
    MiniButton,
    MaxiButton,
    Persona,
    setPersona,
    selectPersona,
    DialogSignin,
    CMS,
    selectAdmin,
    setAdmin,
    AdminMenu,
    // Components
    FindUs,
    OnTheMap,
    Landing,
    TitleMovie,
    Blocked,
    // Cms
    cmsRead,
    selectCms,
    setCms,
    // Core
    navClick,
    navigateTo,
    selectCore,
    setCore,
    // Flash
    selectFlash,
    setFlash,
    initFlash,
    getDisplay,
    Flash,
    MovieClip,
    getNextHighestDepth,
}
