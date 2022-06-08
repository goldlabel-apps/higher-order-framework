import * as React from 'react'
import { useTheme, useMediaQuery, Box } from '@mui/material'
import {
    useAppDispatch,
    useAppSelector,
    MiniButton,
    MaxiButton,
    selectCore,
    navClick,
} from '../listingslab-shared'

const NavButton = (item) => {
    const { type } = item.data
    if (type === "maxi") return <MaxiButton data={ item.data } />
    return <MiniButton data={ item.data } />
}

export default function Navigator() {
    let mode = 'mini'
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    if (!isMobile) mode = 'maxi'
    if (mode === 'hidden') return null
    const core = useAppSelector(selectCore)
    const { menuItems } = core.data.navigator
    
    return <Box sx={{ position: "absolute", bottom: 1, right: 1 }}>
                {menuItems.map((item, i) => {
                    return <NavButton key={`menuItem_${i}`} data={item} />
                })}
            </Box>
}
