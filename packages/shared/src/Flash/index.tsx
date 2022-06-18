// Flash.
import { selectFlash, selectMovieClips, setFlash } from './flashSlice'
import { movieClips } from './movieClips'
import Flash from './Flash'
import MovieClip from './MovieClip'
import Mumma from './MovieClips/Mumma'
import Pingpongball from './MovieClips/Pingpongball'
import Macromedia from './MovieClips/Macromedia'
import Sounds from "./Sounds"
import Timemachine from './MovieClips/Timemachine'

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
    resize,
} from './ActionScript'

export {
    Flash,
    MovieClip,
    Mumma,
    Pingpongball,
    Timemachine,
    Macromedia,
    getDisplay,
    initFlash,
    selectFlash,
    selectMovieClips,
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
    movieClips,
    resize,
    Sounds,
}
