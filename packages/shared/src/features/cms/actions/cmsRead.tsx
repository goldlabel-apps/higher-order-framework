import { collection, query, getDocs } from 'firebase/firestore'
import { AppThunk } from '../../../app/store'
import { setCms, updateDataBus } from '../'
import { db } from '../../../Shared'

export const cmsRead = (collectionName:string): AppThunk => async (dispatch: any) => {
    try {
        const q = query(collection(db, collectionName))
        let itemArr = []
        const snap = await getDocs(q)
        snap.forEach((document) => {
            const doc = { id: document.id, data: document.data() }
            // @ts-ignore
            itemArr = [...itemArr, doc]
        })
        dispatch(setCms({ key: 'loaded', value: true }))
        dispatch(updateDataBus({ collectionName, key: "list", value: itemArr }))
    } catch (error) {
        console.warn('cmsRead error', error)
    }
}
