import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCore,
    selectCms,
    Icon,
} from '../../listingslab-shared'
import { Card, Grid, IconButton } from '@mui/material'

export default function Editor() {
    return (
        <Card sx={{ minHeight: 250, m: 1, p: 1 }}>
            <Grid container>
                <Grid item>
                    <IconButton sx={{ mt: 1, ml: 1 }}>
                        <Icon icon="edit" />
                    </IconButton>
                </Grid>

                <Grid item sx={{ flexGrow: 1 }} />
                <Grid item>Editor</Grid>
            </Grid>
        </Card>
    )
}
