// import { collection, query, getDocs } from 'firebase/firestore'
import { AppThunk } from '../../../app/store'
import { setDataBus, adminRead } from '../'
// import { db } from '../../../Shared'

export const adminInit = (): AppThunk => async (dispatch: any) => {
    try {
        const value = { updated: Date.now() }
        dispatch(setDataBus({ key: 'sites', value }))
        dispatch(setDataBus({ key: 'posts', value }))
        dispatch(setDataBus({ key: 'links', value }))
        dispatch(setDataBus({ key: 'keywords', value }))
        dispatch(setDataBus({ key: 'categories', value }))
        dispatch(adminRead('sites'))
        dispatch(adminRead('posts'))
        dispatch(adminRead('links'))
        dispatch(adminRead('keywords'))
        dispatch(adminRead('categories'))
    } catch (error) {
        console.warn('adminRead error', error)
    }
}
