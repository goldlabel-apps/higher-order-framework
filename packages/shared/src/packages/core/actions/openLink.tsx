import { AppThunk } from '../../../app/store'

export interface LinkShape {
    url: string
    target: string
}

export const openLink =
    (link: LinkShape): AppThunk =>
    async () => {
        try {
            const { url, target } = link
            window.open(url, target)
            return true
        } catch (error) {
            console.warn('navigateTo error', error)
        }
    }
