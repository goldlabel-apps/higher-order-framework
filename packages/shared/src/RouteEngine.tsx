import * as React from 'react'
import { CardMedia, Box, Typography } from '@mui/material'
import {
    useAppSelector,
    useAppDispatch,
    selectRoute,
    setCore,
    setCms,
    selectSSR,
    selectRefresh,
    selectCms,
    cmsRead,
} from './listingslab-shared'

export default function RouteEngine() {
    const dispatch = useAppDispatch()
    const route = useAppSelector(selectRoute)
    const ssr = useAppSelector(selectSSR)
    const refresh = useAppSelector(selectRefresh)
    const cms = useAppSelector(selectCms)

    const getContentBySlug = (slug: string, posts: any) => {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].data.slug === slug) {
                return posts[i].data
            }
        }
        return false
    }

    React.useEffect(() => {
        const { loading, loaded } = cms.data
        if (!loading && !loaded) {
            dispatch(cmsRead())
            dispatch(setCms({ key: 'loading', value: true }))
            dispatch(setCms({ key: 'loaded', value: false }))
        }
    }, [cms, dispatch])

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

    const { posts } = cms.data
    if (!posts) return null
    const thisUrl = window.location.href
    let thisSlug = `${thisUrl.replace(ssr[0].data.baseURL, '')}`
    if (thisSlug === '') thisSlug = '/'
    let content = getContentBySlug(thisSlug, posts)
    const { title, image, body } = content

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
