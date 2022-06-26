import React from 'react'
import {
    Stage,
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
            <Stage>
                {movieClips.map((item, i) => {
                    return <MovieClip key={`mc_${i}`} data={item} />
                })}
            </Stage>
        </React.Fragment>
    )
}
