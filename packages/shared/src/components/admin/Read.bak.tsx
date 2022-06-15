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
    CardHeader,
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
    let defaultExpanded = true
    defaultExpanded = false

    console.warn("selected", selected)

    const onItemDelete = (item: any) => {
        console.warn("Delete", item)
        return true
    }

    const onItemEdit = (item: any) => {
        // console.warn("Edit", item)
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
                                    
                                        <CardHeader 
                                            title={ title }
                                            subheader={ excerpt }
                                            avatar={ avatar ? <Avatar src={avatar} /> : null }
                                            action={<Box>
                                                        <IconButton
                                                            color="secondary"
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                onItemEdit(item)
                                                            }}
                                                        >
                                                            <Icon icon="edit" />
                                                        </IconButton>
                                                        
                                                        <IconButton
                                                            disabled
                                                            color="secondary"
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                onItemDelete(item)
                                                            }}>
                                                            <Icon icon="delete" />
                                                        </IconButton>
                                                    </Box>}
                                        />
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