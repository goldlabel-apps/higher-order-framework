import { collection, query, getDocs } from 'firebase/firestore'
import { AppThunk } from '../../../app/store'
import { setCms } from '../'
import { db } from '../../../Shared'

export const cmsRead =
    (payload: any): AppThunk =>
    async (dispatch: any) => {
        try {
            const { where } = payload
            if (where) console.warn('where', where)
            dispatch(setCms({ key: 'fetching', value: true }))
            dispatch(setCms({ key: 'fetched', value: false }))
            const q = query(collection(db, 'cms'))
            let postsArr = []
            const snap = await getDocs(q)
            snap.forEach((document) => {
                const doc = { id: document.id, data: document.data() }
                postsArr = [...postsArr, doc]
            })

            dispatch(setCms({ key: 'fetched', value: true }))
            dispatch(setCms({ key: 'posts', value: postsArr }))
        } catch (error) {
            console.warn('cmsRead error', error)
        }
    }
