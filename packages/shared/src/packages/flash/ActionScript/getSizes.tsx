import { getElement } from './'

export const getSizes = (divId) => {
    try {
        const stage = getElement('stage')
        if (!stage) {
            console.error('No stage')
            return false
        }
        const el = getElement(divId)
        if (!el) {
            console.error('No element called', divId)
            return false
        }
        return {
            stageW: stage.width,
            stageH: stage.height,
            elW: el.width,
            elH: el.height,
        }
    } catch (error) {
        return false
    }
}
