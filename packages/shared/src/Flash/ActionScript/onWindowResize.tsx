import { store, setFlash } from '../../listingslab-shared'
import { initFlash } from './'

export const onWindowResize = () => {
    try {
        store.dispatch(setFlash({ key: 'refresh', value: true }))
    } catch (error) {
        console.warn('onWindowResize error', error)
        return false
    }
}
