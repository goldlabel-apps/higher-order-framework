import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCms,
    setCms,
    Icon,
    // Shape,
} from '../../listingslab-shared'
import { Box, Grid, Typography, IconButton } from '@mui/material'

export default function Selected() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectCms)
    const { selected } = cms.data
    if (!selected) return null
    // console.warn("selected", selected)

    const onDeSelect = () => {
        dispatch(setCms({ key: 'selected', value: null }))
        return true
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Box>
                    <IconButton color="secondary" onClick={onDeSelect}>
                        <Icon icon="arrowl" />
                    </IconButton>
                    <Typography variant="button" color="secondary" sx={{}}>
                        Selected
                    </Typography>

                    <pre>posts {JSON.stringify(selected, null, 2)}</pre>
                </Box>
            </Grid>

            
        </Grid>
    )
}

/*

<Grid item xs={12} md={4}>
                <Shape />
            </Grid>

<pre>posts {JSON.stringify(posts, null, 2)}</pre>
*/
