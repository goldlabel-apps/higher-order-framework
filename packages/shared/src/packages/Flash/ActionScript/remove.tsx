export const remove = (divId: string) => {
    try {
        const el = document.getElementById(divId)
        if (el) el.remove()
        return true
    } catch (error) {
        return false
    }
}
