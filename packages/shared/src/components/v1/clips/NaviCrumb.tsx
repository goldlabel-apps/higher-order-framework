import * as React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { selectLayout, selectSSR, routeTo } from '../../../listingslab-shared'
import { IconButton, Box, Badge, Button, Typography } from '@mui/material'
import { Icon } from '../../../theme'
import { history } from '../../../Shared'

export default function NaviCrumb() {
    const id = 'naviCrumbClip'
    const dispatch = useAppDispatch()
    const location = useLocation()
    const layout = useAppSelector(selectLayout)
    const ssr = useAppSelector(selectSSR)
    if (!layout) return null
    const { colWidth } = layout
    const { siteTitle, pathnamePrefix } = ssr
    const pathname = history.location.pathname.replace(pathnamePrefix, '')

    return (
        <Box
            id={id}
            sx={{
                opacity: 0,
                position: 'absolute',
                width: colWidth,
            }}
        >
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ ml: 1.5, mr: 1 }}>
                    <Badge badgeContent={null} color="default">
                        <IconButton
                            color="primary"
                            onClick={(e) => {
                                e.preventDefault()
                                dispatch(routeTo({ pathname: '/' }))
                            }}
                        >
                            <Icon icon={'logo'} />
                        </IconButton>
                    </Badge>
                </Box>

                <Box sx={{ mt: 0.5 }}>
                    <Typography variant="h6">{siteTitle}</Typography>
                </Box>

                <Box sx={{ flexGrow: 1 }} />
            </Box>

            <Box sx={{ p: 1 }}>
                <Button
                    color="inherit"
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(routeTo({ pathname: '/work' }))
                    }}
                >
                    Work
                </Button>
                |
                <Button
                    color="inherit"
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(routeTo({ pathname: '/life' }))
                    }}
                >
                    Life
                </Button>
                |
                <Button
                    color="inherit"
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(routeTo({ pathname: '/balance' }))
                    }}
                >
                    Balance
                </Button>
            </Box>
        </Box>
    )
}

/*

<Box sx={{ ml: 2.5 }}>
        pathname
        <pre>{JSON.stringify(pathname, null, 2)}</pre>
      </Box>

      <Box sx={{ ml: 2.5 }}>
        <pre>{JSON.stringify(pathnameParts2, null, 2)}</pre>
        <pre>{JSON.stringify(baseURLParts2, null, 2)}</pre>
      </Box>
<Typography>
  <Link href="/">Landing</Link> >&nbsp;
  <Link href="/category-name">Category</Link> >&nbsp;
  Post Title
</Typography>
*/
