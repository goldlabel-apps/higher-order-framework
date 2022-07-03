import PJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import { store } from './app/store'
import { useAppSelector, useAppDispatch } from './app/hooks'

import Shared from './Shared'
import { Icon, getDesignTokens } from './theme'

import RouteEngine from './RouteEngine'
import MaxiButton from './components/MaxiButton'
import Navigator from './components/Navigator'
import MiniButton from './components/MiniButton'
import AppMenu from './components/AppMenu'

import Social from './components/Social'
import Blocked from './components/Blocked'
import Map from './components/Map'
import FindUs from './components/FindUs'
import FullScreenToggle from './components/FullScreenToggle'

import SigninDialog from './packages/admin/components/SigninDialog'
import Read from './packages/admin/components/Read'
import Admin from './packages/admin/components/Admin'
import Form from './packages/admin/components/Form'
import Collections from './packages/admin/components/Collections'
import Collection from './packages/admin/components/Collection'
import Shape from './packages/admin/components/Shape'
import Selected from './packages/admin/components/Selected'

import { getById, sortByAttribute, getPostBySlug } from './app/utils'

import { Search } from './packages/search'

import {
    Pingpong,
    PingpongAdmin,
    selectPingpong,
    setPingpong,
    pingpongInit,
} from './packages/pingpong'

import {
    selectAdmin,
    setAdmin,
    setDataBus,
    adminRead,
    newCollectionBus,
    adminInit,
    updateDataBus,
} from './packages/admin'

import {
    selectRoute,
    selectRefresh,
    selectSSR,
    selectCore,
    setCore,
    navClick,
    svgImageBtnClick,
    navigateTo,
    signIn,
    unsignIn,
    openLink,
} from './packages/core'

import {
    Stage,
    Cannatown,
    MovieClip,
    Sky,
    Mumma,
    Chix,
    Punk,
    Biker,
    initFlash,
    setFlash,
    startCannatown,
    selectFlash,
    selectMovieClips,
    getDisplay,
    getNextHighestDepth,
    resize,
    LayoutHome,
    SVGImageBtn,
    getComponent,
} from './packages/flash'

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
    // Search
    Search,
    // Flash
    Stage,
    MovieClip,
    Cannatown,
    Mumma,
    Chix,
    Punk,
    Biker,
    Sky,
    LayoutHome,
    selectFlash,
    selectMovieClips,
    startCannatown,
    setFlash,
    initFlash,
    getDisplay,
    getNextHighestDepth,
    resize,
    SVGImageBtn,
    getComponent,
    // Core
    store,
    useAppDispatch,
    useAppSelector,
    RouteEngine,
    svgImageBtnClick,
    selectRoute,
    selectRefresh,
    selectSSR,
    signIn,
    unsignIn,
    navClick,
    navigateTo,
    openLink,
    selectCore,
    setCore,
    // Theme
    getDesignTokens,
    Icon,
    // Components
    Navigator,
    MiniButton,
    MaxiButton,
    AppMenu,
    FindUs,
    Blocked,
    Map,
    Social,
    FullScreenToggle,
    // Admin
    SigninDialog,
    Admin,
    Read,
    Form,
    Collections,
    Collection,
    Shape,
    Selected,
    // Admin
    adminRead,
    newCollectionBus,
    adminInit,
    selectAdmin,
    setAdmin,
    setDataBus,
    updateDataBus,
    // Utils
    getById,
    sortByAttribute,
    getPostBySlug,
    // Pingpong
    Pingpong,
    PingpongAdmin,
    selectPingpong,
    setPingpong,
    pingpongInit,
}
