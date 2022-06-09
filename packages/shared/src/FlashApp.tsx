import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import {    
    Flash,
    MovieClip,
} from './listingslab-shared'

import { Mumma } from "./Flash"

// Define all the Clips and stick them on the stage using MovieClip component

const movieClips = [
    {
        id: "mumma",
        component: "Mumma",
        initialPosition: "centered",
        width: 100,
        height: 200,
        zIndex: 200,
    },
    // {
    //     id: "pingpongball",
    //     component: "Pingpongball",
    //     initialPosition: "topright",
    //     width: 100,
    //     height: 100,
    //     zIndex: 300,
    // },
]

export default function FlashApp() {

    // const depth = getNextHighestDepth()
    // console.log ()

    return <Flash movieClips={ movieClips }>
                { movieClips.map((item,i) => {
                    return <MovieClip 
                                key={`mc_${i}`} 
                                data={ item }
                            />
                })}
            </Flash>
}
