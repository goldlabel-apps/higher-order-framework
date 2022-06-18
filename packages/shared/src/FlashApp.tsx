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
                FlashApp
                {movieClips.map((item, i) => {
                    return <MovieClip key={`mc_${i}`} data={item} />
                })}
            </Flash>
        </React.Fragment>
    )
}
