import * as React from 'react'
import {
    Box,
    Card,
    CardHeader,
    CardMedia,
    Avatar,
    IconButton,
} from '@mui/material'
import {
    useAppSelector,
    useAppDispatch,
    selectRoute,
    setCore,
    setCms,
    selectSSR,
    selectRefresh,
    selectCms,
    cmsInit,
    selectCore,
    getPostBySlug,
    navigateTo,
    Icon,
} from './listingslab-shared'

export default function RouteEngine() {
    const dispatch = useAppDispatch()
    const route = useAppSelector(selectRoute)
    const ssr = useAppSelector(selectSSR)
    const core = useAppSelector(selectCore)
    const refresh = useAppSelector(selectRefresh)
    const cms = useAppSelector(selectCms)
    const thisUrl = window.location.href
    let thisSlug = `${thisUrl.replace(ssr[0].data.baseURL, '')}`
    if (thisSlug === '') thisSlug = '/'

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
    }, [refresh, route, ssr, dispatch])
    

    let post = null
    const { posts, sites, links, keywords, categories  } = cms.bus
    if (!posts && !sites && !links && !keywords && !categories) {
        dispatch(cmsInit())
    }
    if (posts){
        // 
        const postList = posts.list
        if (postList) {
            post = getPostBySlug(thisSlug, postList)
        }
    }

    let signedIn = false
    if (core.data.uid) signedIn = true

    const onUpdateClick = () => {
        dispatch(setCore({ key: 'cmsDialogOpen', value: true }))
        dispatch(setCms({ key: 'mode', value: 'update' }))
        return true
    }

    const onCreateClick = () => {
        dispatch(setCore({ key: 'cmsDialogOpen', value: true }))
        dispatch(setCms({ key: 'mode', value: 'create' }))
        return true
    }

    const onHomeClick = () => {
        dispatch(navigateTo({ pathname: '/' }))
        return true
    }

    let title = `404. ${thisSlug}`
    let excerpt = 'Not found'
    let image = 'https://listingslab.com/svg/featured/macromedia.svg'
    let avatar = 'https://listingslab.com/svg/icons/PWA.svg'

    if (post) {
        title = post.title
        excerpt = post.excerpt
        image = post.image
        avatar = post.avatar
    }

    return (
        <Box sx={{}}>
            
            <CardMedia 
                component="img" 
                height="200" 
                image={image} 
                alt={title} 
            />
            <CardHeader
                title={title}
                subheader={excerpt}
                avatar={<React.Fragment>
                    { avatar ? <Avatar src={avatar} /> : null }
                </React.Fragment>}
                action={
                    signedIn ? (
                        <React.Fragment>
                            {!post ? (
                                <IconButton onClick={onCreateClick}>
                                    <Icon icon="create" />
                                </IconButton>
                            ) : (
                                <IconButton onClick={onUpdateClick}>
                                    <Icon icon="edit" />
                                </IconButton>
                            )}
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {thisSlug !== '/' ? (
                                <IconButton onClick={onHomeClick}>
                                    <Icon icon="home" />
                                </IconButton>
                            ) : null}
                        </React.Fragment>
                    )
                }
            />

            
        </Box>
    )
}

/*
<pre>cms {JSON.stringify(cms, null, 2)}</pre>
*/