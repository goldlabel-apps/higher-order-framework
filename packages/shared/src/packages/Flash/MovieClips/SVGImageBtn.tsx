import * as React from 'react'
import {
    useAppDispatch,
    svgImageBtnClick,
    getComponent,
} from '../../../listingslab-shared'
import { 
    Box, 
    ButtonBase, 
    Typography, 
    CardMedia,
} from '@mui/material'

export interface ButtonAttributesShape {
    type: string
    url: string
    route: string
    target: string
    label: string
    imageSrc: string    
}

export default function SVGImageBtn(props: any) {
    const dispatch = useAppDispatch()
    const { buttonAttributes } = props
    if (!buttonAttributes) return null

    // console.warn ("buttonAttributes", buttonAttributes )

    let theRoute = "/"
    let theLabel = 'The Label'
    let theComponentName = 'Punk'
    let theSlug = "the-slug"
    let theImageSrc = null
    
    const { label, componentName, imageSrc, slug, route } = buttonAttributes
    if (label) theLabel = label
    if (componentName) theComponentName = componentName
    if (imageSrc) theImageSrc = imageSrc
    if (slug) theSlug = slug

    let onClick = () => { dispatch(svgImageBtnClick( slug )) }

    // const imageComponent = getComponent(theComponentName)
    // console.warn("imageComponent", imageComponent)

    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                borderBottom: "",
                background: 'rgba(0,0,0,0.1)',
                // margin: 'left',
                mb: 1,
                display: 'flex',
                flexDirection: 'column',
                width: 200,
                textAlign:"left",
            }}
        >

            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ flexGrow: 1, m: 1, fontWeight: 'lighter' }}>
                    {theLabel}
                </Typography>
            </Box>

            { theImageSrc ? <Box sx={{ mb: 1 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={theImageSrc}
                    alt={label}
                />
            </Box> : null }

            
            
        </ButtonBase>
    )
}

/*
<pre>
                {JSON.stringify(buttonAttributes, null, 2)}
            </pre>
*/