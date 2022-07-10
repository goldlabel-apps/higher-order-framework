import React from 'react'
import {
    Stage,
    MovieClip,
    useAppSelector,
    selectMovieClips,
    SigninDialog,
    Admin,
    selectFlash,
} from '../../listingslab-shared'

export default function FlashApp() {
    let realWidth = 300
    const movieClips = useAppSelector(selectMovieClips)
    const flash = useAppSelector(selectFlash)
    const { display } = flash.data
    if (display) {
        const { displayW, displayH } = display
        if (displayW > 850) {
            realWidth = 840
        }
    }
    // if (!display) return null
    // const { displayW, displayH } = display

    return (
        <React.Fragment>
            <SigninDialog />
            <Admin />
            <Stage>
                {movieClips.map((item, i) => {
                    const itemData = {
                        ...item,
                        width: realWidth,
                    }
                    return <MovieClip key={`mc_${i}`} data={itemData} />
                })}
            </Stage>
        </React.Fragment>
    )
}
