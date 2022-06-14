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
    cmsRead,
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

    React.useEffect(() => {
        dispatch(setCore({ key: 'refresh', value: false }))
        // console.warn('signedIn', signedIn)
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

    const { posts } = cms.data
    if (!posts) {
        dispatch(cmsRead())
        return null
    }

    const thisUrl = window.location.href
    let thisSlug = `${thisUrl.replace(ssr[0].data.baseURL, '')}`
    if (thisSlug === '') thisSlug = '/'

    const post = getPostBySlug(thisSlug, posts)

    let signedIn = false
    if (core.data.uid) signedIn = true

    const onUpdateClick = () => {
        dispatch(setCore({ key: 'cmsDialogOpen', value: true }))
        dispatch(setCms({ key: 'collection', value: 'posts' }))
        dispatch(setCms({ key: 'mode', value: 'update' }))
        return true
    }

    const onCreateClick = () => {
        dispatch(setCore({ key: 'cmsDialogOpen', value: true }))
        dispatch(setCms({ key: 'collection', value: 'posts' }))
        dispatch(setCms({ key: 'mode', value: 'create' }))
        return true
    }

    const onHomeClick = () => {
        dispatch(navigateTo({ pathname: '/' }))
        return true
    }

    let title = `404. ${thisSlug}`
    let excerpt = 'Not found'
    // let avatar = 'https://listingslab.com/svg/avatars/chix.svg'
    let image = 'https://listingslab.com/svg/featured/macromedia.svg'

    if (post) {
        title = post.title
        excerpt = post.excerpt
        // avatar = post.avatar
        image = post.image
    }

    return (
        <Box sx={{}}>
            <Card>
                <CardHeader
                    title={title}
                    subheader={excerpt}
                    // avatar={<Avatar src={avatar} />}
                    avatar={
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

                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt={title}
                />
            </Card>
        </Box>
    )
}
