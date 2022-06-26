import * as React from 'react'
import debounce from 'debounce'
import {
    useAppDispatch,
    useAppSelector,
    setFlash,
    getDisplay,
} from '../../listingslab-shared'
import { onWindowResize, initFlash, selectFlash, resize } from './'

export default function Stage(props) {
    window.addEventListener('resize', debounce(onWindowResize, 333))

    const { children } = props
    const dispatch = useAppDispatch()
    const flash = useAppSelector(selectFlash)

    React.useEffect(() => {
        const { started, display, refresh, windowResized } = flash.data
        // console.warn('refresh', refresh)
        if (!display) {
            dispatch(setFlash({ key: 'display', value: getDisplay() }))
        }

        if (!started) {
            dispatch(setFlash({ key: 'started', value: true }))
            setTimeout(() => {
                initFlash()
            }, 333)
        }
        if (refresh) {
            dispatch(setFlash({ key: 'refresh', value: false }))
            setTimeout(() => {
                initFlash()
            }, 333)
        }
        if (windowResized) {
            dispatch(setFlash({ key: 'windowResized', value: false }))
            dispatch(setFlash({ key: 'display', value: getDisplay() }))
            setTimeout(() => {
                resize()
            }, 333)
        }
    }, [flash, dispatch])

    const { display } = flash.data
    if (!display) return null
    const { displayW, displayH } = display
    const stageStyle = {
        border: "1px solid rgba(0,0,0,0.5)",
        background: 'rgba(0,0,0,0.015)',
        width: displayW - 16,
        height: displayH - 16,
        overflow: 'hidden',
        zIndex: 1,
        postition: 'relative',
    }

    return (
        <div id="stage" style={stageStyle}>
            {children}
        </div>
    )
}
