import { getElement, setPosition } from './'

export const initFlash = () => {

    const navigator = getElement("navigator")
    if (!navigator) return console.warn('#navigator not found')
    console.warn("center the Navigator")
    setPosition("navigator", "centered", { top:0, left:0 } )
    return true
}
