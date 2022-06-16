import { collection, query, orderBy, getDocs } from 'firebase/firestore'
import { AppThunk } from '../../../app/store'
import { updateDataBus } from '../'
import { db } from '../../../Shared'

export const cmsRead =
    (collectionName: string): AppThunk =>
    async (dispatch: any) => {
        try {
            const q = query(collection(db, collectionName), orderBy('order'))
            let itemArr = []
            const snap = await getDocs(q)
            snap.forEach((document) => {
                const item = { id: document.id, data: document.data() }
                // @ts-ignore
                itemArr = [...itemArr, item]
            })
            dispatch(
                updateDataBus({ collectionName, key: 'list', value: itemArr })
            )
        } catch (error) {
            console.warn('cmsRead error', error)
        }
    }
