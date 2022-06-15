// import { collection, query, getDocs } from 'firebase/firestore'
import { AppThunk } from '../../../app/store'
import { setDataBus, cmsRead } from '../'
// import { db } from '../../../Shared'

export const cmsInit = (): AppThunk => async (dispatch: any) => {
    try {
        const value = { updated: Date.now() }
        dispatch(setDataBus({ key: 'sites', value }))
        dispatch(setDataBus({ key: 'posts', value }))
        dispatch(setDataBus({ key: 'links', value }))
        dispatch(setDataBus({ key: 'keywords', value }))
        dispatch(setDataBus({ key: 'categories', value }))
        dispatch(cmsRead('sites'))
        dispatch(cmsRead('posts'))
        dispatch(cmsRead('links'))
        dispatch(cmsRead('keywords'))
        dispatch(cmsRead('categories'))
    } catch (error) {
        console.warn('cmsRead error', error)
    }
}
