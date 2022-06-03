import * as React from 'react'
import { Box, Typography, CardMedia } from '@mui/material'
import {
    useAppSelector,
    useAppDispatch,
    setCms,
    selectCms,
    // cmsRead,
} from '../listingslab-shared'

const getPostBySlug = (posts: any, slug: string) => {
    for (let i = 0; i < posts.length; i++) {
        const { data } = posts[i]
        if (slug === data.slug) return posts[i]
    }
    return false
}

export default function Landing() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectCms)
    const baseURL = 'system.ssr[0].data'
    let url = window.location.href
    let pathname = `${url.replace(baseURL, '')}`
    const { posts, fetched } = cms.data
    const [cmsDoc, setcmsDoc] = React.useState({
        slug: pathname,
        url: 'http',
        title: 'Default',
    })

    React.useEffect(() => {
        const { refresh, location, fetching, fetched } = cms.data
        if (!fetching && !fetched) {
            // dispatch(cmsRead({}))
        }
        if (refresh) dispatch(setCms({ key: 'refresh', value: false }))
        const url = window.location.href
        const baseURL = 'system.ssr[0].data'
        const pathname = `${url.replace(baseURL, '')}`
        setcmsDoc({
            slug: pathname,
            url,
            title: 'not default',
        })
        if (!location) {
            // dispatch(routeTo({ pathname }))
        }
    }, [cms, dispatch])
    if (!fetched) return null

    let post = false
    // console.warn("slug", `/${pathname}`)
    if (posts) {
        post = getPostBySlug(posts, `/${pathname}`)
        // setcmsDoc({
        //     title:"blahblah",
        //     url: "",
        //     slug:"",
        // })
    }
    // if (post) console.warn('post', post)

    const title = 'Title is this'
    const imageSrc = 'https://listingslab.com/svg/featured/team.svg'

    return (
        <React.Fragment>
            <Typography variant="h6" sx={{ fontWeight: 'lighter' }}>
                {title}
            </Typography>

            <CardMedia
                component="img"
                height="194"
                image={imageSrc}
                alt={title}
            />

            <Box>
                post<pre>{JSON.stringify(post || null, null, 2)}</pre>
            </Box>
        </React.Fragment>
    )
}
