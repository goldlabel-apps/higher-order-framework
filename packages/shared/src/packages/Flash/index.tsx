// Flash.
import { selectFlash, selectMovieClips, setFlash } from './flashSlice'
import { clips } from './clips'
import Stage from './Stage'
import MovieClip from './MovieClip'
import { getComponent } from './ActionScript/getComponent'

// Timeines
import { Cannatown } from './Timelines/Cannatown'
import { startCannatown } from './Timelines/Cannatown/startCannatown'
import LayoutHome from './Layouts/LayoutHome'

import SVGImageBtn from './MovieClips/SVGImageBtn'
import Sky from './MovieClips/svgTsx/Sky'
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
    Cannatown,
    MovieClip,
    Mumma,
    Chix,
    Sky,
    Pingpongball,
    Timemachine,
    Macromedia,
    startCannatown,
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
    SVGImageBtn,
    Punk,
    Biker,
    LayoutHome,
    getComponent,
}
