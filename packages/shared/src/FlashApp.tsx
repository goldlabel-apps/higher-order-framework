import React from 'react'
import {
    Flash,
    MovieClip,
    useAppSelector,
    selectMovieClips,
} from './listingslab-shared'

export default function FlashApp() {
    const movieClips = useAppSelector(selectMovieClips)
    return (
        <Flash>
            {movieClips.map((item, i) => {
                return <MovieClip key={`mc_${i}`} data={item} />
            })}
        </Flash>
    )
}
