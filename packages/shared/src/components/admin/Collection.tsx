import * as React from 'react'
import { 
    useAppSelector, 
    useAppDispatch,
    selectCms,
    newCollectionBus,
} from '../../listingslab-shared'
import { Card, LinearProgress } from '@mui/material'

export default function Collection() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    const { bus } = cms
    const data = bus[collection]
    let loading = false
    let list = []
    let shape = {}
    if (data){
        loading = data.loading
        list = data.list
        shape = data.shape
    }
    
    // console.warn("loading", loading)

    React.useEffect(() => {
        if (!bus[collection]) dispatch(newCollectionBus( collection ))
    }, [bus, collection, dispatch])
    

    return (
        <Card sx={{ m: 1, p: 1, boxShadow: 'none' }}>
            { loading ? <LinearProgress sx={{m:1}} color="secondary" /> : 
            <React.Fragment>
                <pre>shape { JSON.stringify( shape, null, 2 ) }</pre>
            <pre>list { JSON.stringify( list, null, 2 ) }</pre>
            </React.Fragment> }
        </Card>
    )
}

/*
*/
