import * as React from 'react'
import {
    useAppSelector,
    selectCms,
    Icon,
    Shape,
} from '../../listingslab-shared'
import { Grid, Button } from '@mui/material'

export default function Form(props: any) {
    // const cms = useAppSelector(selectCms)
    const { data } = props.shape
    const defaultData = {}
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            const type = data[key]
            let value = null
            if (type === 'string') value = ''
            if (type === 'numberArray') value = [0]
            if (type === 'urlString') value = 'https://'
            if (type === 'boolean') value = false
            if (type === 'number') value = 0
            defaultData[key] = { value, type }
        }
    }

    const [formData, setFormData] = React.useState(defaultData)

    const onFormChange = () => {
        return true
    }

    const validateForm = () => {
        return true
    }

    return (
        <Grid container>
            <Grid item xs={6} sx={{ border: '1px solid white' }}></Grid>
            <Grid item xs={6} sx={{ border: '1px solid white' }}>
                <Shape />
            </Grid>
            <Grid item xs={12} sx={{ border: '1px solid white', mt: 2 }}>
                <Button variant="text" color="secondary" onClick={() => {}}>
                    <Icon icon={'close'} />
                    <span style={{ marginRight: 4, marginLeft: 4 }}>
                        Cancel
                    </span>
                </Button>

                <Button variant="outlined" color="secondary" onClick={() => {}}>
                    <Icon icon={'save'} />
                    <span style={{ marginRight: 4, marginLeft: 4 }}>Save</span>
                </Button>
            </Grid>
        </Grid>
    )
}

/*
<pre>{JSON.stringify(formData, null, 2)}</pre>
<pre>{JSON.stringify(data, null, 2)}</pre>
*/
