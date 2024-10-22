import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectAdmin,
    setAdmin,
    Shape,
    Icon,
} from '../../../listingslab-shared'
import {
    Grid,
    LinearProgress,
    ListItem,
    Button,
    ListItemAvatar,
    DialogActions,
    ListItemText,
} from '@mui/material'

export default function Read() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectAdmin)
    const { collection } = cms.data
    const { bus } = cms
    const data = bus[collection]
    if (!data.list) return <LinearProgress color="secondary" />
    const items = data.list

    const onItemEdit = (item: any) => {
        dispatch(setAdmin({ key: 'selected', value: item }))
        return true
    }

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    {items.map((item, i) => {
                        const { id } = item
                        const { title, label, excerpt } = item.data
                        let displayTxt = title
                        if (!title) displayTxt = label
                        if (id === '_shape') return null
                        return (
                            <React.Fragment key={`post_${i}`}>
                                <ListItem
                                    button
                                    onClick={() => {
                                        onItemEdit(item)
                                    }}
                                >
                                    <ListItemText
                                        primary={displayTxt}
                                        secondary={excerpt}
                                    />
                                </ListItem>
                            </React.Fragment>
                        )
                    })}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

/*


<Grid item xs={12} md={4}>
                    <Shape />
                </Grid>
                                    
<Grid item xs={12}>
                    <pre>items {JSON.stringify(items, null, 2)}</pre>
                </Grid>

<pre>posts {JSON.stringify(posts, null, 2)}</pre>
<Typography variant="button" color="secondary" sx={{}}>
                    { collection }
                </Typography>



<ListItemAvatar>
                                        <Icon icon={icon ? icon : 'post'} />
                                    </ListItemAvatar>                
            
                */
