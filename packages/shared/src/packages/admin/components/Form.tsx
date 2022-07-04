// @ts-nocheck
import * as React from 'react'
import { useAppDispatch, setAdmin, Icon } from '../../../listingslab-shared'
import { Card, Box, Grid, Button, TextField, Typography } from '@mui/material'

export default function Form(props: any) {
    const dispatch = useAppDispatch()
    const { data } = props.shape
    let defaultData = {}
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
    const [formValid, setFormValid] = React.useState(false)

    const onFormChange = (field, value, type) => {
        setFormData({
            ...formData,
            [field]: { value, type },
        })
        validateForm()
        return true
    }

    const validateForm = () => {
        let valid = true
        if (formData.title.value.length < 3) valid = false
        if (formData.slug.value.length < 3) valid = false
        setFormValid(valid)
    }

    const onCancelClick = () => {
        dispatch(setAdmin({ key: 'mode', value: 'read' }))
        return true
    }

    const { title, slug } = formData
    // console.warn("slug", slug.value)

    return (
        <Grid container>
            <Grid item xs={6} sx={{ border: '1px solid white' }}>
                {title ? (
                    <TextField
                        autoFocus
                        sx={{ mt: 1 }}
                        fullWidth
                        id="title"
                        label="Title"
                        variant="filled"
                        value={title.value}
                        onChange={(e) => {
                            onFormChange('title', e.target.value, title.type)
                        }}
                    />
                ) : null}

                {slug ? (
                    <TextField
                        sx={{ mt: 1 }}
                        fullWidth
                        id="slug"
                        label="Slug"
                        variant="filled"
                        value={slug.value}
                        onChange={(e) => {
                            onFormChange('slug', e.target.value, slug.type)
                        }}
                    />
                ) : null}
            </Grid>

            <Grid item xs={6} sx={{ border: '1px solid white' }}>
                <Card sx={{ m: 1, p: 1 }}>
                    <Typography variant="button" sx={{ fontWeight: 'lighter' }}>
                        Preview
                    </Typography>
                    {formData ? (
                        <React.Fragment>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 'lighter' }}
                            >
                                {formData.title.value}
                            </Typography>

                            <Typography variant="body2" sx={{}}>
                                {formData.slug.value}
                            </Typography>
                        </React.Fragment>
                    ) : null}
                </Card>
            </Grid>

            <Grid item xs={12} sx={{ border: '1px solid white', mt: 2 }}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{}}>
                        <Button
                            variant="text"
                            color="secondary"
                            onClick={onCancelClick}
                        >
                            <Icon icon={'close'} />
                            <span style={{ marginRight: 4, marginLeft: 4 }}>
                                Cancel
                            </span>
                        </Button>

                        <Button
                            disabled={!formValid}
                            variant="contained"
                            color="secondary"
                            onClick={() => {}}
                        >
                            <Icon icon={'save'} />
                            <span style={{ marginRight: 4, marginLeft: 4 }}>
                                Save
                            </span>
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

/*
<pre>title { JSON.stringify(formData.title, null, 2) }</pre>
<pre>slug { JSON.stringify(formData.slug, null, 2) }</pre>
<pre>{JSON.stringify(data, null, 2)}</pre>
*/
