import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCms,
    setCms,
    Shape,
    Icon,
} from '../../listingslab-shared'
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
    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    const { bus } = cms
    const data = bus[collection]
    if (!data.list) return <LinearProgress color="secondary" />
    const items = data.list

    const onItemEdit = (item: any) => {
        dispatch(setCms({ key: 'selected', value: item }))
        return true
    }

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12} md={8}>
                    {items.map((item, i) => {
                        const { id } = item
                        const { title, label, icon } = item.data
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
                                    <ListItemAvatar>
                                        <Icon icon={icon ? icon : 'post'} />
                                    </ListItemAvatar>
                                    <ListItemText primary={displayTxt} />
                                </ListItem>
                            </React.Fragment>
                        )
                    })}
                </Grid>
                <Grid item xs={12} md={4}>
                    <Shape />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

/*



                                    
<Grid item xs={12}>
                    <pre>items {JSON.stringify(items, null, 2)}</pre>
                </Grid>

<pre>posts {JSON.stringify(posts, null, 2)}</pre>
<Typography variant="button" color="secondary" sx={{}}>
                    { collection }
                </Typography>



                
            
                */
