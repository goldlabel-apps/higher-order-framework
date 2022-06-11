import React from 'react'
import { Flash, MovieClip, useAppSelector, selectMovieClips, } from './listingslab-shared'

export default function FlashApp() {

    const movieClips = useAppSelector(selectMovieClips)
    console.warn ("movieClips", movieClips)

    return (
        <Flash>
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
