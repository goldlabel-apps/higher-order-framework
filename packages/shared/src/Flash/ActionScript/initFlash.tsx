import { store } from "../../listingslab-shared"
import { getElement, setPosition, fadeIn } from './'

export const initFlash = () => {
    const { movieClips } = store.getState().flash.data
    for (let i = 0; i < movieClips.length; i++ ){
        const { id, initialPosition } = movieClips[i]
        setPosition(id, initialPosition, { top: 0, left: 0 } )
        fadeIn(id)
    }
    return true
}
