import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCms,
    newCollectionBus,
} from '../../listingslab-shared'
import { useTheme, useMediaQuery, Card, LinearProgress } from '@mui/material'

export default function Collection() {
    const dispatch = useAppDispatch()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    const { bus } = cms
    const data = bus[collection]
    let loading = false
    let loaded = false
    let list = []
    let shape = {}
    let type = ''
    if (data) {
        loading = data.loading
        loaded = data.loaded
        list = data.list
        shape = data.shape
        type = data.type
    }

    React.useEffect(() => {
        if (!bus[collection]) dispatch(newCollectionBus(collection))
    }, [bus, collection, dispatch])

    return (
        <Card sx={{ m: 1, p: 1, boxShadow: 'none' }}>
            {loading ? (
                <LinearProgress sx={{ m: 1 }} color="secondary" />
            ) : null}
            {!loading && loaded ? (
                <React.Fragment>
                    <pre>shape {JSON.stringify(shape, null, 2)}</pre>
                    <pre>isMobile {JSON.stringify(isMobile, null, 2)}</pre>
                </React.Fragment>
            ) : null}
        </Card>
    )
}

/*

<Shape />
<Data />
<Form />

<React.Fragment>
<pre>shape { JSON.stringify( shape, null, 2 ) }</pre>
<pre>list { JSON.stringify( list, null, 2 ) }</pre>
</React.Fragment>

*/
