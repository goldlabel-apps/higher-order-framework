import { AppThunk } from '../../../app/store'
import { navigateTo } from '../../../listingslab-shared'

export const svgImageBtnClick =
    (slug: string): AppThunk =>
    async (dispatch: any, getState: any) => {
        try {
            //console.warn("svgImageBtnClick", slug)
            window.scrollTo({ top: 0, behavior: 'smooth' })

            switch (slug) {
                case '':
                    dispatch(navigateTo({ pathname: '/' }))
                    break

                case 'home':
                    dispatch(navigateTo({ pathname: '/' }))
                    break

                case 'work':
                    dispatch(navigateTo({ pathname: '/work' }))
                    break

                case 'life':
                    dispatch(navigateTo({ pathname: '/life' }))
                    break

                case 'balance':
                    dispatch(navigateTo({ pathname: '/balance' }))
                    break

                default:
            }
            return true
        } catch (error) {
            console.warn('navClick error', error)
        }
    }
