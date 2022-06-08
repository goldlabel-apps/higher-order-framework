import * as React from 'react'
import { useTheme, useMediaQuery, Box, Grid, Typography } from '@mui/material'
import {
    // useAppDispatch,
    useAppSelector,
    MaxiButton,
    // setCore,
    // selectPersona,
    selectCore,
} from '../listingslab-shared'

export default function Navigator() {
    let mode = 'mini'
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    if (!isMobile) mode = 'maxi'
    if (mode === 'hidden') return null
    const core = useAppSelector(selectCore)
    
    const { menuItems } = core.data.navigator
    // console.warn("menuItems", menuItems)

    const onMenuItemClick = (action) => {
        // dispatch action here
        console.warn("dispatch action here", action)
    }

    // const dispatch = useAppDispatch()
    // const persona = useAppSelector(selectPersona)
    // let isSignedIn = false
    // if (persona.data.user.uid) isSignedIn = true
    
    return <Box sx={{ position: "absolute", bottom: 1, right: 1 }}>
                {menuItems.map((item, i) => {
                    const { action } = item
                    return <MaxiButton 
                                key={`menuItem_${i}`}
                                data={item}
                                onClick={ onMenuItemClick }
                            />
                })}
            </Box>
}


/*

<MiniButton data={ HomeBtnData } />


    const signinBtnData = {
        icon: 'adminOff',
        label: 'Sign in',
        tooltip: 'Sign in',
        variant: 'text',
        onClick: () => {
            dispatch(setCore({ key: `dialogSigninOpen`, value: true }))
        },
    }
*/