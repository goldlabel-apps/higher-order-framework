import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCms,
    Form,
    Read,
    Selected,
} from '../../listingslab-shared'
import { Box, Card, LinearProgress } from '@mui/material'

export default function Collection() {
    const cms = useAppSelector(selectCms)
    const { collection, mode, selected } = cms.data
    const { bus } = cms
    const data = bus[collection]
    let loading = false
    if (data) {
        loading = data.loading
    }
    return (
        <Card sx={{ m: 1, p: 1, boxShadow: 'none' }}>
            {loading ? (
                <LinearProgress sx={{ m: 1 }} color="secondary" />
            ) : null}
            
                <React.Fragment>
                    {mode === 'read' ? (
                        <Box>{!selected ? <Read /> : <Selected />}</Box>
                    ) : null}

                    {mode === 'create' ? (
                        <Box>
                            Crud CREATE
                            <Form />
                        </Box>
                    ) : null}

                    {mode === 'update' ? (
                        <Box>
                            <Form />
                        </Box>
                    ) : null}
                </React.Fragment>
        </Card>
    )
}

/*

<Shape />
<Data />
<Form />
<pre>mode {JSON.stringify(mode, null, 2)}</pre>
<React.Fragment>
<pre>shape { JSON.stringify( shape, null, 2 ) }</pre>
<pre>list { JSON.stringify( list, null, 2 ) }</pre>
</React.Fragment>

    // const theme = useTheme()
    // const isMobile = useMediaQuery(theme.breakpoints.down('md'))

*/
