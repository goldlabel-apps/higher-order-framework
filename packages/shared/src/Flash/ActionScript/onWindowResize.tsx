
export const onWindowResize = () => {
    try {
        console.warn('onWindowResize', Date.now())
        return true
    } catch (error) {
        return false
    }
}
