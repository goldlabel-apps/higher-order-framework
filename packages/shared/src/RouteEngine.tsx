import * as React from 'react'
import { 
    Alert, 
    Button, 
    Box, 
    Card,
    CardHeader,
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
    // const [currentPost, setCurrentPost] = React.useState( false )

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
    if (!posts) {
        dispatch( cmsRead() )
        return null
    }

    const thisUrl = window.location.href
    let thisSlug = `${thisUrl.replace(ssr[0].data.baseURL, '')}`
    if (thisSlug === '') thisSlug = '/'

    const post = getPostBySlug( thisSlug, posts )

    let signedIn = false
    if (core.data.uid) signedIn = true


    // console.warn('signedIn', signedIn)

    const onCreateClick = () => {
        dispatch( setCore({ key:"cmsDialogOpen", value: true}))
        dispatch( setCms({ key:"collection", value: "posts"}))
        dispatch( setCms({ key:"mode", value: "create"}))
        return true
    }

    const onHomeClick = () => {
        dispatch( navigateTo({ pathname: "/" }))
        return true
    }

    let title = null
    let excerpt = null
    let avatar = null

    if (post){
        title = post.title
        excerpt = post.excerpt
        avatar = post.avatar
    }

    return (
        <Box sx={{ mt: 2 }}>
            <Card>
                <CardHeader 
                    title={title}
                    subheader={excerpt}
                    avatar={<Avatar src={avatar}/>}
                    action={<IconButton>
                                <Icon icon="edit" />
                            </IconButton>}
                />
            { !post ? <Alert 
                            severity="warning"
                            action={<React.Fragment>
                                        { signedIn ? <Button 
                                            onClick={onCreateClick}
                                            color="inherit" 
                                            size="small">
                                            Create
                                        </Button> : <Button 
                                            onClick={onHomeClick}
                                            color="inherit" 
                                            size="small">
                                            Home
                                        </Button> }
                                    </React.Fragment>
                            }
                        >
                        { thisSlug } is a 404, brah
                    </Alert> : null }

            
            </Card>
        </Box>
    )
}

/*
{ post ? <React.Fragment>
    <pre>{ JSON.stringify( post, null, 2) }</pre>
</React.Fragment>  : null }
*/
