// import { collection, query, getDocs } from 'firebase/firestore'
import { AppThunk } from '../../../app/store'
import { setDataBus } from '../'
// import { db } from '../../../Shared'

export const newCollectionBus =
    (collectionName: string): AppThunk =>
    async (dispatch: any) => {
        try {
            console.warn('newCollectionBus', collectionName)
            dispatch(
                setDataBus({
                    key: collectionName,
                    value: {
                        updated: Date.now(),
                        loading: true,
                        loaded: false,
                    },
                })
            )
        } catch (error) {
            console.warn('newCollectionBus error', error)
        }
    }
