import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCms,
    setCms,
    Shape,
} from '../../listingslab-shared'
import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Grid,
} from '@mui/material'

export default function Read() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectCms)
    const { collection, posts } = cms.data
    const { bus } = cms
    const data = bus[collection]
    if (!data) return null

    const onItemEdit = (item: any) => {
        dispatch(setCms({ key: 'selected', value: item }))
        return true
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                {collection}
            </Grid>
        </Grid>
    )
}

/*

<Grid item xs={12} md={4}>
                <Shape />
            </Grid>
<pre>posts {JSON.stringify(posts, null, 2)}</pre>
<Typography variant="button" color="secondary" sx={{}}>
                    { collection }
                </Typography>

{posts.map((item, i) => {
                    const { id } = item
                    const { avatar, title, excerpt } = item.data
                    if (id === '_shape') return null
                    return (
                        <React.Fragment key={`post_${i}`}>
                            <ListItem
                                button
                                onClick={() => {
                                    onItemEdit(item)
                                }}
                            >
                                {avatar ? (
                                    <ListItemAvatar>
                                        <Avatar src={avatar} />
                                    </ListItemAvatar>
                                ) : null}
                                <ListItemText
                                    primary={title}
                                    secondary={excerpt}
                                />
                            </ListItem>
                        </React.Fragment>
                    )
                })}


                */
