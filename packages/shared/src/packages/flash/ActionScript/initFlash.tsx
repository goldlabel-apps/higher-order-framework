import { store } from '../../../listingslab-shared'
import { setPosition, fadeIn } from './'

export const initFlash = () => {
    //
    const { movieClips } = store.getState().flash.data
    for (let i = 0; i < movieClips.length; i++) {
        // console.warn('movieClip', movieClips[i])
        const { id, initialPosition, options } = movieClips[i]
        setPosition(id, initialPosition, options)
        fadeIn(id, () => {
            // if (id==="logo"){
            //     console.warn("logo done")
            // }
        })
    }
    return true
}

/*
animateTo, fadeOut, 

setPosition("logo", "centered", { 
        top: -55, 
        left: -25, 
        rotation: 180,
        opacity: 0,
        scale: 0,
    })
    animateTo("logo", "centered", { 
        top: 0, 
        left: 0, 
        rotation: 0,
        opacity: 1,
        scale: 0.8,
    }, () => {

        fadeOut("logo")
        // animateTo("logo", "centered", { 
        //     top: 0, 
        //     left: -200, 
        //     rotation: 0,
        //     opacity: 1,
        //     scale: 0.8,
        // }, () => {
        // })
    })

    */
