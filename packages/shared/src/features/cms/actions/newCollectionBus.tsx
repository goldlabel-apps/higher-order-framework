import { collection, query, getDocs } from 'firebase/firestore'
import { AppThunk } from '../../../app/store'
import { setDataBus, updateDataBus } from '../'
import { db } from '../../../Shared'

export const newCollectionBus = (collectionName: string): AppThunk => async (dispatch: any) => {
    try {
        dispatch(setDataBus({ key: collectionName, value: {
            updated: Date.now(),
            loading: true,
            loaded: false,
        }}))
        const q = query(collection(db, collectionName))
        let list = []
        const snap = await getDocs(q)
        snap.forEach((document) => {
            if (document.id !== "_shape") list = [...list, { id: document.id, data: document.data() }]
            if (document.id === "_shape")dispatch(updateDataBus({ collectionName, key: "shape", value: document.data()}))
        })
        dispatch(updateDataBus({ collectionName, key: "list", value: list }))
        dispatch(updateDataBus({ collectionName, key: "loading", value: false }))
        dispatch(updateDataBus({ collectionName, key: "loaded", value: true }))
    } catch (error) {
        console.warn('newCollectionBus error', error)
    }
}
