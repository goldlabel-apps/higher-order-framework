import { AppThunk } from '../../../app/store'
import { navigateTo } from '../../../listingslab-shared'

export const navClick =
    (item: any): AppThunk =>
    async (dispatch: any, getState: any) => {
        try {
            let gotoPathname = '/'
            const { action, pathname } = item
            if (pathname) gotoPathname = pathname

            window.scrollTo({ top: 0, behavior: 'smooth' })

            switch (action) {
                case 'onHomeClick':
                    dispatch(navigateTo({ pathname: '/' }))
                    break

                case 'onWorkClick':
                    dispatch(navigateTo({ pathname: '/work' }))
                    break

                case 'onLifeClick':
                    dispatch(navigateTo({ pathname: '/life' }))
                    break

                case 'onBalanceClick':
                    dispatch(navigateTo({ pathname: '/balance' }))
                    break

                default:
            }
            return true
        } catch (error) {
            console.warn('navClick error', error)
        }
    }
