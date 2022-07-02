import { AppThunk } from '../../../app/store'
import { navigateTo } from '../../../listingslab-shared'

export const svgImageBtnClick =
    (id: string): AppThunk =>
    async (dispatch: any, getState: any) => {
        try {

            console.warn("svgImageBtnClick", id)
            window.scrollTo({ top: 0, behavior: 'smooth' })

            switch (id) {
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
