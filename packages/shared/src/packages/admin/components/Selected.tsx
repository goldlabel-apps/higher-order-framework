import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectAdmin,
    setAdmin,
} from '../../../listingslab-shared'
import { Box, Button, Grid } from '@mui/material'

export default function Selected() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectAdmin)
    const { selected } = cms.data
    if (!selected) return null
    // console.warn("selected", selected)

    const deSelect = () => {
        dispatch(setAdmin({ key: 'selected', value: null }))
        return true
    }

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <Box>
                        <pre>
                            Selected post {JSON.stringify(selected, null, 2)}
                        </pre>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={deSelect} variant={'contained'}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

/*

 <Grid item xs={12} md={4}>
                    <Shape />
                </Grid>

<pre>Selected post {JSON.stringify(selected, null, 2)}</pre>
<pre>posts {JSON.stringify(posts, null, 2)}</pre>

<Typography
                            variant="body2"
                            sx={{ fontWeight: 'lighter' }}
                        >
                            id {id}
                        </Typography>

*/
