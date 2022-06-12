import { collection, query, getDocs } from 'firebase/firestore'
import { AppThunk } from '../../../app/store'
import { setDataBus } from '../'
import { db } from '../../../Shared'

export const newCollectionBus = (collection: string): AppThunk => async (dispatch: any) => {
    try {
        console.warn ("newCollectionBus", collection)
        dispatch(setDataBus({ key: collection, value: {
            name: collection,
            updated: Date.now(),
            loading: true,
            loaded: false,
        }}))

        // const q = query(collection(db, 'cms'))
        // let postsArr = []
        // const snap = await getDocs(q)
        // snap.forEach((document) => {
        //     const doc = { id: document.id, data: document.data() }
        //     // @ts-ignore
        //     postsArr = [...postsArr, doc]
        // })
        // dispatch(setCms({ key: 'loaded', value: true }))
        // dispatch(setCms({ key: 'posts', value: postsArr }))
    } catch (error) {
        console.warn('newCollectionBus error', error)
    }
}
