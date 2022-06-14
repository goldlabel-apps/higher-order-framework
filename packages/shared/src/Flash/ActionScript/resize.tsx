import { store } from '../../listingslab-shared'
import { animateTo } from './'

export const resize = () => {
    const { movieClips } = store.getState().flash.data
    for (let i = 0; i < movieClips.length; i++) {
        const { id, initialPosition, options } = movieClips[i]
        // console.warn( 'animateTo', id, initialPosition, options )
        animateTo(id, initialPosition, options, () => {})
    }
    return true
}
