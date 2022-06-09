import { AppThunk } from '../../../app/store'

export const navClick = (item: any): AppThunk =>
    async (dispatch: any, getState: any) => {
        try {

            let gotoPathname = "/"
            const { action, pathname } = item
            if (pathname) gotoPathname = pathname

            // console.warn ("item", item)
            
            switch ( action ) {

                case 'onHomeClick':
                    // console.warn('Go Home')
                    // gotoPathname = "home"
                    break

                case 'onWorkClick':
                    // console.warn('WORK')
                    break
                    
                case 'onLifeClick':
                    // console.warn('LIFE')
                    break
                    
                case 'onBalanceClick':
                    // console.warn('BALANCE')
                    break

                default:
            }
            console.warn("gotoPathname: ", gotoPathname)
            return true
        } catch (error) {
            console.warn('navClick error', error)
        }
    }
