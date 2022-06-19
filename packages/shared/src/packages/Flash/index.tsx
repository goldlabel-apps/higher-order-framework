// Flash.
import { selectFlash, selectMovieClips, setFlash } from './flashSlice'
import { clips } from './clips'
import Stage from './Stage'
import MovieClip from './MovieClip'

import Sounds from './Sounds'

import Work from './MovieClips/Work'
import Life from './MovieClips/Life'
import Balance from './MovieClips/Balance'

import Punk from './MovieClips/svgTsx/Punk'
import Biker from './MovieClips/svgTsx/Biker'
import Mumma from './MovieClips/svgTsx/Mumma'
import Chix from './MovieClips/svgTsx/Chix'

import Timemachine from './MovieClips/svgTsx/Timemachine'
import Pingpongball from './MovieClips/svgTsx/Pingpongball'
import Macromedia from './MovieClips/svgTsx/Macromedia'

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
} from '../flash/ActionScript'

export {
    Stage,
    MovieClip,
    Mumma,
    Chix,
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
    clips,
    resize,
    Sounds,
    Work,
    Life,
    Balance,
    Punk,
    Biker,
}
