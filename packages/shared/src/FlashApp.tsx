import React from 'react'
import { Flash, MovieClip } from './listingslab-shared'
const movieClips = [
    {
        id: 'logo',
        component: 'Macromedia',
        offset: { top: 0, left: 0 },
        initialPosition: 'centered',
        width: 100,
        height: 200,
        zIndex: 200,
    },
    {
        id: 'navigator',
        component: 'Navigator',
        initialPosition: 'bottommiddle',
        offset: { top: 0, left: 0 },
        width: 300,
        height: 40,
        zIndex: 1234,
    },
    // {
    //     id: 'titleMovie',
    //     component: 'TitleMovie',
    //     initialPosition: 'centered',
    //     offset: { top: 10, left: 140 },
    //     width: 300,
    //     height: 100,
    //     zIndex: 123,
    // },

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
