import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCore,
    selectCms,
    Icon,
} from '../../listingslab-shared'
import {
    Grid,
    IconButton,
} from '@mui/material'

export default function ListItems() {

    return (
                <Grid container>
                    <Grid item>
                        <IconButton sx={{ mt: 1, ml: 1 }}>
                            <Icon icon="list" />
                        </IconButton>
                    </Grid>
                    
                    <Grid item sx={{ flexGrow: 1 }} />
                    <Grid item>
                        ListItems
                    </Grid>
                </Grid>

    )
}

/*

    // const sortedPosts = sortByAttribute(posts, "order")
    // console.warn("sortedPosts", sortedPosts)

        const onItemClick = (id: string) => {
        dispatch(setCms({ key: 'editing', value: id }))
    }

    
<List dense>
                            {posts.map((item, i) => {
                                const { id } = item
                                const { title, order } = item.data
                                return (
                                    <ListItem
                                        key={`post_${i}`}
                                        button
                                        onClick={() => {
                                            onItemClick(id)
                                        }}
                                    >
                                        <ListItemText 
                                            primary={ title } 
                                            // secondary={ order } 
                                        />
                                    </ListItem>
                                )
                            })}
                        </List>
*/