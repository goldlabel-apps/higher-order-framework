import React from 'react'
import { Flash, MovieClip } from './listingslab-shared'
const movieClips = [
    // {
    //     id: 'logo',
    //     component: 'Macromedia',
    //     initialPosition: 'centered',
    //     options: {
    //         top: 0,
    //         left: 0,
    //         rotation: 0,
    //         scale: 0.5,
    //     },
    //     width: 100,
    //     height: 100,
    //     zIndex: 100,
    // },

    {
        id: 'navigator',
        component: 'Navigator',
        initialPosition: 'bottommiddle',
        options: {
            top: -25,
            left: 0,
            rotation: 0,
            scale: 1,
        },
        width: 300,
        height: 40,
        zIndex: 1234,
    },

    {
        id: 'titleMovie',
        component: 'TitleMovie',
        initialPosition: 'topmiddle',
        options: {
            top: 50,
            left: 0,
            rotation: 0,
            scale: 1,
        },
        width: 300,
        height: 100,
        zIndex: 123,
    },
]

export default function FlashApp() {
    return (
        <Flash movieClips={movieClips}>
            {movieClips.map((item, i) => {
                return <MovieClip key={`mc_${i}`} data={item} />
            })}
        </Flash>
    )
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
