import * as React from 'react'
import {
    Box,
    IconButton,
    Menu,
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Divider,
} from '@mui/material'
import {
    Icon,
    navigateTo,
    useAppDispatch,
    useAppSelector,
    selectCore,
    unsignIn,
    setCore,
    MaxiButton,
    MiniButton,
} from '../listingslab-shared'

export default function AppMenu() {
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const core = useAppSelector(selectCore)

    let signedIn = false
    if (core.data.uid) signedIn = true

    const appMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const onItemClick = (item: string) => {
        switch (item) {
            case 'home':
                dispatch(navigateTo({ pathname: '/' }))
                break
            case 'signout':
                dispatch(unsignIn())
                break
            case 'signin':
                dispatch(setCore({ key: 'dialogSigninOpen', value: true }))
                break
            case 'admin':
                dispatch(setCore({ key: 'adminOpen', value: true }))
                break
            default:
        }
        appMenuClose()
    }

    const appMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <React.Fragment>
            <Box sx={{ m: 0 }}>
                <MiniButton
                    data={{
                        label: 'Menu',
                        tooltip: 'Click me',
                        type: 'mini',
                        icon: 'menu',
                        color: 'secondary',
                        onClick: appMenuOpen,
                    }}
                />

                <Box sx={{ ml: 3 }}>
                    <Menu
                        id="app-menu"
                        anchorEl={anchorEl}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={open}
                        onClose={appMenuClose}
                        MenuListProps={{
                            'aria-labelledby': 'app-button',
                        }}
                    >
                        <MenuList sx={{ width: 250 }} dense>
                            <MenuItem
                                onClick={() => {
                                    onItemClick('home')
                                }}
                            >
                                <ListItemIcon>
                                    <IconButton
                                        sx={{ mr: 1 }}
                                        color="secondary"
                                    >
                                        <Icon icon="home" />
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemText>Home</ListItemText>
                                <Typography variant="body2">⌘H</Typography>
                            </MenuItem>

                            {signedIn ? (
                                <React.Fragment>
                                    <MenuItem
                                        onClick={() => {
                                            onItemClick('admin')
                                        }}
                                    >
                                        <ListItemIcon>
                                            <IconButton
                                                sx={{ mr: 1 }}
                                                color="secondary"
                                            >
                                                <Icon icon="cms" />
                                            </IconButton>
                                        </ListItemIcon>
                                        <ListItemText primary="Admin" />
                                        <Typography variant="body2">
                                            ⌘A
                                        </Typography>
                                    </MenuItem>
                                </React.Fragment>
                            ) : null}

                            {signedIn ? (
                                <MenuItem
                                    onClick={() => {
                                        onItemClick('signout')
                                    }}
                                >
                                    <ListItemIcon>
                                        <IconButton
                                            sx={{ mr: 1 }}
                                            color="secondary"
                                        >
                                            <Icon icon="exit" />
                                        </IconButton>
                                    </ListItemIcon>
                                    <ListItemText>Sign out</ListItemText>
                                    <Typography variant="body2"></Typography>
                                </MenuItem>
                            ) : (
                                <React.Fragment>
                                    <MenuItem
                                        onClick={() => {
                                            onItemClick('signin')
                                        }}
                                    >
                                        <ListItemIcon>
                                            <IconButton
                                                sx={{ mr: 1 }}
                                                color="secondary"
                                            >
                                                <Icon icon="exit" />
                                            </IconButton>
                                        </ListItemIcon>
                                        <ListItemText>Sign in</ListItemText>
                                        <Typography variant="body2"></Typography>
                                    </MenuItem>
                                </React.Fragment>
                            )}
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </React.Fragment>
    )
}
