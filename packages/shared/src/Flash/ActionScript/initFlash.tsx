import { store } from '../../listingslab-shared'
import { setPosition, animateTo } from './'

export const initFlash = () => {

    setPosition("logo", "centered", { 
        top: 0, 
        left: 0, 
        rotation: 90,
        opacity: 0,
        scale: 0.5,
    })

    animateTo("logo", "centered", { 
        top: 0, 
        left: 0, 
        rotation: 0,
        opacity: 1,
        scale: 1,
    }, () => {
        console.warn("logo animation done")
    })

    // fadeIn("logo", () => {
    //     console.warn("logo faded in")
    // })

    // const { movieClips } = store.getState().flash.data
    // for (let i = 0; i < movieClips.length; i++) {
    //     const { id, initialPosition, offset } = movieClips[i]
    //     setPosition(id, initialPosition, offset)
    //     fadeIn(id)
    // }

    return true
}
