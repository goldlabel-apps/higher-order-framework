export const getDisplay = () => {
    try {
        const innerHeight = window.innerHeight
        const innerWidth = window.innerWidth
        let mode = 'square'
        let isMobile = false
        if (innerWidth < 650) isMobile = true
        if (innerWidth > innerHeight) mode = 'landscape'
        if (innerWidth < innerHeight) mode = 'portrait'
        return {
            displayW: innerWidth,
            displayH: innerHeight,
            mode,
            isMobile,
        }
    } catch (error) {
        console.warn('getDisplay error', error)
        return false
    }
}
