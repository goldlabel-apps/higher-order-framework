import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import {
    Landing,
    DialogSignin,
    FindUs,
    Navigator,
    Blocked,
    useAppSelector,
    selectCms,
    OnTheMap,
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
                        <Box sx={{ ml: 1, mt: 3 }}>
                            <Landing />
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ ml: 1, mt: 1, width: 225 }}>
                                <FindUs />
                            </Box>
                            <Box sx={{ flexGrow: 1 }} />
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ ml: 1, mt: 1 }}>
                            <Navigator />
                        </Box>
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    )
}
