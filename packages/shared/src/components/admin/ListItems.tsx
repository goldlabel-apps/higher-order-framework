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
    Card,
} from '@mui/material'

export default function ListItems() {

    return (<Card sx={{ minHeight: 250, m:1, p:1 }}>
                <Grid container>
                    <Grid item>
                        ListItems
                    </Grid>
                </Grid>
            </Card>
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