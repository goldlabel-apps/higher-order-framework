import * as React from 'react'
import {
    Box,
    Fab,
    Divider,
    IconButton,
    Menu,
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Tooltip,
} from '@mui/material'
import {
    useAppSelector,
    useAppDispatch,
    unsignIn,
    setAdmin,
    Icon,
    CMS,
    selectAdmin,
} from '../listingslab-shared'

export default function AppMenu() {
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const admin = useAppSelector(selectAdmin)
    const { buttons } = admin.data.menu.data
    // console.warn("buttons", buttons)

    const appMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const adminMenuClose = () => {
        setAnchorEl(null)
    }

    const onSignoutClick = () => {
        dispatch(unsignIn())
        adminMenuClose()
    }

    const onCmsClick = () => {
        dispatch(setAdmin({ key: 'cmsIsOpen', value: true }))
        adminMenuClose()
    }

    return (
        <React.Fragment>
            <Tooltip title="Admin Menu" color="primary">
                <Fab
                    color="secondary"
                    id="admin-button"
                    aria-controls={open ? 'admin-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={appMenuOpen}
                >
                    <Icon icon="menu" />
                </Fab>
            </Tooltip>

            <Menu
                id="admin-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={adminMenuClose}
                MenuListProps={{
                    'aria-labelledby': 'admin-button',
                }}
            >
                <Box>
                    <pre>{JSON.stringify(buttons, null, 2)}</pre>
                </Box>

                <MenuList sx={{ width: 200, maxWidth: '100%' }}>
                    <MenuItem onClick={onCmsClick}>
                        <ListItemIcon>
                            <Icon icon="cms" />
                        </ListItemIcon>
                        <ListItemText>CMS</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘C
                        </Typography>
                    </MenuItem>

                    <Divider />

                    <MenuItem onClick={onSignoutClick}>
                        <ListItemIcon>
                            <Icon icon="exit" />
                        </ListItemIcon>
                        <ListItemText>Sign out</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu>
        </React.Fragment>
    )
}
/*


<CMS />


            */
