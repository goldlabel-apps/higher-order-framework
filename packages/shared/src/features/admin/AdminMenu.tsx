import * as React from 'react'
import {
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
    useAppDispatch,
    unsignIn,
    setAdmin,
    Icon,
    CMS,
} from '../../listingslab-shared'

export default function AdminMenu() {
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const adminMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
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
            <CMS />
            <Tooltip title="Admin Menu" color="primary">
                <IconButton
                    color="primary"
                    id="admin-button"
                    aria-controls={open ? 'admin-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={adminMenuOpen}
                >
                    <Icon icon="admin" />
                </IconButton>
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
