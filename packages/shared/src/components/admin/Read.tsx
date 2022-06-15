import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCms,
    setCms,
    Icon,
    Shape,
} from '../../listingslab-shared'
import {
    Avatar,
    IconButton,
    Box,
    Card,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Grid,
    Typography,
} from '@mui/material'

export default function Read() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectCms)
    const { collection, posts, selected } = cms.data
    const { bus } = cms
    const data = bus[collection]
    if (!data) return null

    const onItemEdit = (item: any) => {
        dispatch(setCms({key: "selected", value: item }))
        return true
    }

    return (
        <Grid container>

            <Grid item xs={12} md={8}>
                { posts.map( (item, i) => {
                    const { id } = item
                    const { avatar, title, excerpt } = item.data
                    if(id === "_shape") return null
                    return <React.Fragment key={ `post_${i}` }>
                                <ListItem 
                                    button
                                    onClick={() => {
                                        onItemEdit(item)
                                    }}>
                                        { avatar ? <ListItemAvatar>
                                                    <Avatar src={avatar} />
                                                </ListItemAvatar> : null }
                                        <ListItemText 
                                            primary={title}
                                            secondary={ excerpt }
                                        />
                                    
                                    </ListItem>
                            </React.Fragment>
                })}
            </Grid>
            <Grid item xs={12} md={4}>
                <Shape /> 
            </Grid>
            
        </Grid>
    )
}

/*
<pre>posts {JSON.stringify(posts, null, 2)}</pre>
<Typography variant="button" color="secondary" sx={{}}>
                    { collection }
                </Typography>

*/