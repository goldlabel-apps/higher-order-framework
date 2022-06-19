import { store, setFlash } from '../../../listingslab-shared'
// import { initFlash } from './'

export const onWindowResize = () => {
    try {
        // console.warn('onWindowResize', Date.now())
        store.dispatch(setFlash({ key: 'windowResized', value: true }))
    } catch (error) {
        console.warn('onWindowResize error', error)
        return false
    }
}
