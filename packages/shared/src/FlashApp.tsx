import React from 'react'
import {    
    Flash,
    MovieClip,
} from './listingslab-shared'
const movieClips = [
    {
        id: "navigator",
        component: "Navigator",
        initialPosition: "bottommiddle",
        offset: { top: 0, left: 0 },
        width: 350,
        height: 50,
        zIndex: 1234,
    },
    {
        id: "mumma",
        component: "Mumma",
        offset: { top: 0, left: 0 },
        initialPosition: "centered",
        width: 100,
        height: 200,
        zIndex: 200,
    },
]

export default function FlashApp() {
    return <Flash movieClips={ movieClips }>
                { movieClips.map((item,i) => {
                    return <MovieClip 
                                key={`mc_${i}`} 
                                data={ item }
                            />
                })}
            </Flash>
}




/*
    // const depth = getNextHighestDepth()
    // console.log ()
    {
        id: "pingpongball",
        component: "Pingpongball",
        initialPosition: "topright",
        width: 100,
        height: 100,
        zIndex: 300,
    },
*/