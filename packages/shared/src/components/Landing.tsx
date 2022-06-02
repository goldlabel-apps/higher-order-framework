import * as React from 'react'
import { Box, Typography } from '@mui/material'
import {
    useAppSelector,
    useAppDispatch,
    setCms,
    selectCms,
    selectSystem,
    routeTo,
    cmsRead,
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
    const system = useAppSelector(selectSystem)
    const { baseURL } = system.ssr[0].data
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
            dispatch(cmsRead({}))
        }
        if (refresh) dispatch(setCms({ key: 'refresh', value: false }))

        const url = window.location.href
        const { baseURL } = system.ssr[0].data
        const pathname = `${url.replace(baseURL, '')}`
        setcmsDoc({
            slug: pathname,
            url,
            title: 'not default',
        })
        if (!location) {
            dispatch(routeTo({ pathname }))
        }
    }, [cms, system, dispatch])
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
    let title = ''
    // if (post) console.warn('post', post)
    return (
        <React.Fragment>
            <Box>
                post<pre>{JSON.stringify(post || null, null, 2)}</pre>
            </Box>
        </React.Fragment>
    )
}

/*

<Box>
                <Typography
                    variant="h5"
                    sx={{ textAlign: 'center', fontWeight: 'lighter' }}
                >
                    {title}
                </Typography>
            </Box>

    <Box>cmsDoc<pre>{JSON.stringify( cmsDoc || null, null, 2)}</pre></Box>
    
    <Box>fetched<pre>{JSON.stringify( fetched || null, null, 2)}</pre></Box>
    <Box>posts<pre>{JSON.stringify( posts || null, null, 2)}</pre></Box>
*/
