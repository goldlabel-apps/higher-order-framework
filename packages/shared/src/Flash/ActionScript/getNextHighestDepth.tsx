import { store, setFlash } from '../../listingslab-shared'

export const getNextHighestDepth = () => {
    try {
        const { nextHighestDepth } = store.getState().flash.data
        let newNextHighestDepth = nextHighestDepth + 1
        // console.warn("getNextHighestDepth", newNextHighestDepth)
        // store.dispatch(setFlash({ key: "nextHighestDepth", value: newNextHighestDepth }))
        return newNextHighestDepth
    } catch (error) {
        console.warn('getNextHighestDepth error', error)
        return false
    }
}
