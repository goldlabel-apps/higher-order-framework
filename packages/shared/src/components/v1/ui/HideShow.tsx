import * as React from 'react'
import { styled } from '@mui/material/styles'
import Collapse from '@mui/material/Collapse'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

import { Box, Button } from '@mui/material'

export default function HideShow(props: any) {
    const { children, defaultExpanded } = props
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
            <Button fullWidth onClick={handleExpandClick}>
                show {!expanded ? 'more' : 'less'}
            </Button>
        </Box>
    )
}
