import * as React from 'react'
import {
    useAppSelector,
    selectCms,
    Form,
    Read,
    Selected,
} from '../../listingslab-shared'
import { Box, Card } from '@mui/material'

export default function Collection() {
    const cms = useAppSelector(selectCms)
    const { collection, mode, selected } = cms.data
    const { bus } = cms
    const collectionData = bus[collection]
    let shape = null
    const { list } = collectionData
    if (!list) return null
    if (list.length) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === '_shape') shape = list[i]
        }
    }
    if (!shape) return null

    return (
        <Card sx={{ m: 1, p: 1, boxShadow: 'none' }}>
            <React.Fragment>
                {mode === 'read' ? (
                    <Box>{!selected ? <Read /> : <Selected />}</Box>
                ) : null}
                {mode === 'create' || mode === 'update' ? (
                    <Form shape={shape} />
                ) : null}
            </React.Fragment>
        </Card>
    )
}
