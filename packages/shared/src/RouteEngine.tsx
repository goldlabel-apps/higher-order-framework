import * as React from 'react'
import { CardMedia, Box, Typography } from '@mui/material'
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

    React.useEffect(() => {
        dispatch(setCore({ key: 'refresh', value: false }))
        const windowLocation = window.location
        const url = windowLocation.href
        let thatSlug = `${url.replace(ssr[0].data.baseURL, '')}`
        if (thatSlug === '') thatSlug = '/'
        if (!route) {
            dispatch(setCore({ key: 'route', value: { slug: thatSlug, url } }))
            dispatch(setCore({ key: 'refresh', value: true }))
        }
        if (route) {
            if (route.slug !== thatSlug) {
                dispatch(
                    setCore({ key: 'route', value: { slug: thatSlug, url } })
                )
            }
        }
    }, [refresh, route, dispatch])

    // const { posts } = cms.data
    // if (!posts) return null
    // const thisUrl = window.location.href
    // let thisSlug = `${thisUrl.replace(ssr[0].data.baseURL, '')}`
    // if (thisSlug === '') thisSlug = '/'
    // let content = getContentBySlug(thisSlug, posts)
    // const { title, image, body } = content

    const title = "Time Machine"
    const image = "https://listingslab.com/svg/featured/timemachine.svg"
    const body = "lorem ipsum"

    return (
        <Box sx={{ mt: 2 }}>
            <CardMedia component="img" image={image} alt={title} />
            <Typography
                gutterBottom
                variant="h6"
                sx={{
                    mb: 2,
                    mt: 2,
                    fontWeight: 'lighter',
                    textAlign: 'center',
                }}
            >
                {title}
            </Typography>
            <Typography gutterBottom variant="body1">
                {body}
            </Typography>
        </Box>
    )
}
