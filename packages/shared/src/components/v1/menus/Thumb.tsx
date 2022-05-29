import * as React from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { selectSocial, navigateTo, routeTo } from '../../../features/system'
import {
    Box,
    Menu,
    MenuItem,
    ListItemIcon,
    IconButton,
    Tooltip,
} from '@mui/material'
import { Icon, getDesignTokens } from '../../../theme'

export default function Thumb() {
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const social = useAppSelector(selectSocial)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
        dispatch(routeTo({ pathname: '/social' }))
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Tooltip title="See us socially">
                    <IconButton
                        color="primary"
                        onClick={handleClick}
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'social-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Icon icon="share" />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="social-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        width: 250,
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {social.length ? (
                    <React.Fragment>
                        {social.map((item, i) => {
                            const { label, icon, url } = item
                            return (
                                <React.Fragment key={`social_${i}`}>
                                    <MenuItem
                                        onClick={(e) => {
                                            e.preventDefault()
                                        }}
                                    >
                                        <ListItemIcon>
                                            <IconButton
                                                sx={{ mr: 1 }}
                                                color="primary"
                                            >
                                                <Icon icon={icon} />
                                            </IconButton>
                                        </ListItemIcon>
                                        {label}
                                    </MenuItem>
                                </React.Fragment>
                            )
                        })}
                    </React.Fragment>
                ) : null}
            </Menu>
        </React.Fragment>
    )
}
