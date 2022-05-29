import React from 'react'
import { Box, Grid, CardMedia } from '@mui/material'
import {
    Landing,
    DialogSignin,
    Social,
    Navigator,
    Blocked,
    useAppSelector,
    selectCms,
} from './listingslab-shared'

export default function App() {
    const id = 'app'
    const cms = useAppSelector(selectCms)
    const { refresh } = cms.data

    const images = ['work', 'life', 'balance', 'team', 'spade-js']
    const [image, setImage] = React.useState(
        'https://listingslab.com/svg/featured/team.svg'
    )

    React.useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)]
        setImage(`https://listingslab.com/svg/featured/${randomImage}.svg`)
    }, [cms])

    return (
        <Box id={id}>
            <Blocked />
            <DialogSignin />
            <Box sx={{ width: '98vw' }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Navigator />
                    </Grid>

                    <Grid sm={8} xs={12} item>
                        <Box sx={{ ml: 1, mt: 1 }}>
                            <Landing />
                            <CardMedia
                                sx={{ mt: 2 }}
                                alt="listingslab"
                                component="img"
                                height="325"
                                image={image}
                            />
                        </Box>
                    </Grid>

                    <Grid sm={4} xs={12} item>
                        <Box sx={{ ml: 1 }}>
                            <Social defaultExpanded={true} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
/*
<Persona defaultExpanded={true} />
*/
