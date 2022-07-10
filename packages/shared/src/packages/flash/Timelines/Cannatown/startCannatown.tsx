import { animateTo, fadeIn } from '../../../../listingslab-shared'

export const startCannatown = () => {
    // console.warn('startCannatown')

    animateTo(
        'mumma',
        'centered',
        {
            top: 123,
        },
        () => {}
    )

    fadeIn('mumma', () => {
        // console.warn('finish Cannatown')
    })

    //
    // const { movieClips } = store.getState().flash.data
    // for (let i = 0; i < movieClips.length; i++) {
    //     // console.warn('movieClip', movieClips[i])
    //     const { id, initialPosition, options } = movieClips[i]
    //     setPosition(id, initialPosition, options)
    //     fadeIn(id, () => {
    //         // if (id==="logo"){
    //         //     console.warn("logo done")
    //         // }
    //     })
    // }
    return true
}
