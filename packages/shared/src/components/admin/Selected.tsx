import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectAdmin,
    setAdmin,
    Icon,
    Shape,
} from '../../listingslab-shared'
import { Box, Grid, IconButton, Typography } from '@mui/material'

export default function Selected() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectAdmin)
    const { selected } = cms.data
    if (!selected) return null
    // console.warn("selected", selected)

    const onDeSelect = () => {
        dispatch(setAdmin({ key: 'selected', value: null }))
        return true
    }
    const { id } = selected
    const { title } = selected.data

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Box>
                        <Typography
                            variant="body2"
                            sx={{ fontWeight: 'lighter' }}
                        >
                            id {id}
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 'lighter' }}>
                            {title}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Shape />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

/*
<pre>Selected post {JSON.stringify(selected, null, 2)}</pre>
<pre>posts {JSON.stringify(posts, null, 2)}</pre>
*/
