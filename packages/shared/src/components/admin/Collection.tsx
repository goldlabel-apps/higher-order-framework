import * as React from 'react'
import { 
    useAppSelector, 
    useAppDispatch,
    selectCms,
    newCollectionBus,
} from '../../listingslab-shared'
import { Card } from '@mui/material'

export default function Collection() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    const { bus } = cms
    // const data = bus[collection]
    React.useEffect(() => {
        if (!bus[collection]){
            dispatch(newCollectionBus( collection ))
        }
    }, [bus, collection, dispatch])

    return (
        <Card sx={{ m: 1, p: 1, boxShadow: 'none' }}>
            <pre>{ JSON.stringify( bus, null, 2 ) }</pre>
        </Card>
    )
}
