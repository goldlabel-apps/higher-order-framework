import * as React from 'react'
import { 
    useAppSelector, 
    useAppDispatch,
    selectCms,
    newCollectionBus,
} from '../../listingslab-shared'
import { Card } from '@mui/material'
import { ContactSupportSharp } from '@mui/icons-material'

export default function Collection() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    if (!collection) return null

    const { bus } = cms
    // const data = bus[collection]
    React.useEffect(() => {
        if (!bus[collection]){
            dispatch(newCollectionBus( collection ))
        }
    }, [bus, collection, dispatch])

    return (
        <Card sx={{ m: 1, p: 1, boxShadow: 'none' }}>
            <pre>{ JSON.stringify( bus[collection], null, 2 ) }</pre>
        </Card>
    )
}
