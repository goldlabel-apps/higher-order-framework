import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCms,
    setCms,
    Icon,
    Shape,
} from '../../listingslab-shared'
import { Box, Grid, IconButton, Typography } from '@mui/material'

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
    const { id } = selected
    const { title, } = selected.data

    return (
        <Grid container>
            <Grid item xs={12} md={8}>
                <Box>
                    <IconButton color="secondary" onClick={onDeSelect}>
                        <Icon icon="arrowl" />
                    </IconButton>
                    <Typography variant="h2" sx={{ fontWeight: "lighter" }}>
                        { title }
                    </Typography>
                    <pre>Selected post {JSON.stringify(selected, null, 2)}</pre>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Shape />
            </Grid>
        </Grid>
    )
}

/*

<Typography variant="button" color="secondary" sx={{}}>
                        
                    </Typography>

<Grid item xs={12} md={4}>
                <Shape />
            </Grid>

<pre>posts {JSON.stringify(posts, null, 2)}</pre>
*/
