import { store } from '../../listingslab-shared'
import { getElement, animateTo } from './'

export const onWindowResize = () => {
    try {
        const { movieClips } = store.getState().flash.data
        // console.warn('onWindowResize' )
        for (let i = 0; i < movieClips.length; i++) {
            const { id, initialPosition, offset } = movieClips[i]
            const el = getElement(id)
            // if (el) animateTo(id, initialPosition, offset)
        }
        return true
    } catch (error) {
        return false
    }
}
