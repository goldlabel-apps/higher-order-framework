import { collection, query, getDocs } from 'firebase/firestore'
import { AppThunk } from '../../../app/store'
import { setCms } from '../'
import { db } from '../../../Shared'

export const cmsRead = (): AppThunk => async (dispatch: any) => {
    try {
        const q = query(collection(db, 'cms'))
        let postsArr = []
        const snap = await getDocs(q)
        snap.forEach((document) => {
            const doc = { id: document.id, data: document.data() }
            // @ts-ignore
            postsArr = [...postsArr, doc]
        })
        dispatch(setCms({ key: 'loaded', value: true }))
        dispatch(setCms({ key: 'posts', value: postsArr }))
    } catch (error) {
        console.warn('cmsRead error', error)
    }
}
