// Flash.

import { selectFlash, setFlash } from "./flashSlice"
import Flash from "./Flash"
import MovieClip from "./MovieClip"
import Mumma from "./MovieClips/Mumma"
import Pingpongball from "./MovieClips/Pingpongball"
import Timemachine from "./MovieClips/Timemachine"

import {
    initFlash, 
    onWindowResize,
    animateTo,
    getSizes,
    getElement,
    getStage,
    setPosition,
    fadeIn,
    fadeOut,
    remove,
    getDisplay,
    getNextHighestDepth,
} from './ActionScript'

export {
    Flash,
    MovieClip,
    Mumma,
    Pingpongball,
    Timemachine,
    getDisplay,
    initFlash,
    selectFlash,
    setFlash,
    onWindowResize,
    animateTo,
    getSizes,
    getElement,
    getStage,
    setPosition,
    fadeIn,
    fadeOut,
    remove,
    getNextHighestDepth,
}
