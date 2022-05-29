import * as React from 'react'
import {
    useTheme,
    useMediaQuery,
    Box,
    ButtonBase,
    Typography,
} from '@mui/material'
import { Icon } from '../listingslab-shared'

export default function MetaButton(props: any) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const { data } = props
    const { title, icon } = data

    return (
        <ButtonBase
            sx={{
                p: 1,
                width: '100%',
            }}
        >
            {icon ? (
                <Box>
                    <Icon icon={icon} />
                </Box>
            ) : null}
            <Typography variant="body1" sx={{ ml: 2 }}>
                {title}
            </Typography>
        </ButtonBase>
    )
}
