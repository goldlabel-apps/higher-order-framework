import { store } from "../../listingslab-shared"
import { setPosition, fadeIn } from './'

export const initFlash = () => {
    const { movieClips } = store.getState().flash.data
    for (let i = 0; i < movieClips.length; i++ ){
        const { id, initialPosition, offset } = movieClips[i]
        setPosition(id, initialPosition, offset )
        fadeIn(id)
    }
    return true
}
