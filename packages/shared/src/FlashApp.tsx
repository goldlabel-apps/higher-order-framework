import React from 'react'
import {
    Flash,
    MovieClip,
    useAppSelector,
    selectMovieClips,
    SigninDialog,
    CMS,
} from './listingslab-shared'

export default function FlashApp() {
    const movieClips = useAppSelector(selectMovieClips)
    return (
        <React.Fragment>
            <SigninDialog />
            <CMS />
            <Flash>
                {movieClips.map((item, i) => {
                    return <MovieClip key={`mc_${i}`} data={item} />
                })}
            </Flash>
        </React.Fragment>
    )
}
