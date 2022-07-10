import { store } from '../../../listingslab-shared'
import { animateTo } from './'

export const resize = () => {
    // console.warn("resize")
    const { movieClips } = store.getState().flash.data
    for (let i = 0; i < movieClips.length; i++) {
        const { id, initialPosition, options } = movieClips[i]
        // if (id !=="monsterNav"){
        animateTo(id, initialPosition, options, () => {})
        // }

        // console.warn( 'animateTo', id, initialPosition, options )
    }
    return true
}
