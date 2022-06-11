import * as React from 'react'
import { Box, Typography } from '@mui/material'
import {
    useAppSelector,
    useAppDispatch,
    selectRoute,
    setCore,
    selectSSR,
    selectRefresh,
    selectCms,
} from './listingslab-shared'

export default function RouteEngine() {
    const dispatch = useAppDispatch()
    const route = useAppSelector(selectRoute)
    const ssr = useAppSelector(selectSSR)
    const refresh = useAppSelector(selectRefresh)
    const cms = useAppSelector(selectCms)
    // console.warn("cms", cms.data)

    const getContentBySlug = (slug: string) => {
        // console.warn("getContentBySlug", slug)
        return {
            title: 'Lorem ipsum dolor sit amet',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed orci eu tortor luctus aliquam. Fusce elementum, leo vitae euismod vestibulum, turpis sapien iaculis metus, fermentum eleifend elit libero at lacus. Nulla pharetra orci tincidunt, vestibulum quam ac, rutrum ligula. Duis convallis, dui vitae mollis euismod, felis ipsum tincidunt arcu, et fermentum magna risus porttitor ipsum. Maecenas vitae purus hendrerit diam pulvinar imperdiet. Praesent dictum ex sit amet erat imperdiet rutrum. Sed non efficitur ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu dignissim metus, eget vehicula lorem. Sed nec laoreet ipsum. Aenean rhoncus ultricies urna, a pulvinar lacus dapibus in. Donec viverra consequat iaculis. Pellentesque pharetra tortor sed lobortis vulputate.',
            slug,
        }
    }

    React.useEffect(() => {
        dispatch(setCore({ key: 'refresh', value: false }))
        const windowLocation = window.location
        const url = windowLocation.href
        let slug = `${url.replace(ssr[0].data.baseURL, '')}`
        if (slug === '') slug = '/'
        if (!route) {
            dispatch(setCore({ key: 'route', value: { slug, url } }))
            dispatch(setCore({ key: 'refresh', value: true }))
        }
        if (route) {
            if (route.slug !== slug) {
                dispatch(setCore({ key: 'route', value: { slug, url } }))
                // console.warn("Route Change")
            }
        }
    }, [refresh, route, dispatch])

    let content = getContentBySlug('/')
    console.warn('content', content)

    const { title, slug, body } = content
    // border: "1px solid gold"
    return (
        <Box sx={{}}>
            <Typography
                gutterBottom
                variant="h6"
                sx={{ fontWeight: 'lighter' }}
            >
                {title}
            </Typography>
            <Typography gutterBottom variant="body2">
                slug {slug}
            </Typography>
            <Typography gutterBottom variant="body1">
                body {body}
            </Typography>
        </Box>
    )
}

/*
    saved slug <pre>{ JSON.stringify( slug, null, 2)}</pre>
*/
