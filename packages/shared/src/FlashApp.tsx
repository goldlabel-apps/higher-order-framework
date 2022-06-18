import React from 'react'
import {
    Flash,
    MovieClip,
    useAppSelector,
    selectMovieClips,
    SigninDialog,
    Admin,
} from './listingslab-shared'

export default function FlashApp() {
    const movieClips = useAppSelector(selectMovieClips)
    return (
        <React.Fragment>
            <SigninDialog />
            <Admin />
            <Flash>
                {movieClips.map((item, i) => {
                    // console.warn(item)
                    return <MovieClip key={`mc_${i}`} data={item} />
                })}
            </Flash>
        </React.Fragment>
    )
}
