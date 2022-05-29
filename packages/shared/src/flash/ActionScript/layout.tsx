import { getElement, setPosition, animateTo } from './'

export const layout = (clips) => {
    try {
        const naviCrumbClip = getElement('naviCrumbClip')
        // @ts-ignore
        const naviCrumbClipOffset = naviCrumbClip.height + 25
        animateTo(clips[0].id, 'topmiddle', { left: 0, top: 16 })
        animateTo(clips[1].id, 'topmiddle', {
            left: 0,
            top: naviCrumbClipOffset,
        })

        animateTo(clips[2].id, clips[2].position, clips[2].offset)
    } catch (error) {
        return false
    }
}
