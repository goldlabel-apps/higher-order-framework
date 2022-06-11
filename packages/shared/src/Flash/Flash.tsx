import * as React from 'react'
import debounce from 'debounce'
import {
    useAppDispatch,
    useAppSelector,
    setFlash,
    getDisplay,
} from '../listingslab-shared'
import { onWindowResize, initFlash, selectFlash } from './'

export default function Flash(props) {
    const { children } = props
    const dispatch = useAppDispatch()
    const flash = useAppSelector(selectFlash)

    window.addEventListener('resize', debounce(onWindowResize, 333))

    React.useEffect(() => {
        const { started, display, refresh } = flash.data
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
    }, [flash, dispatch])

    const { display } = flash.data
    if (!display) return null
    const { displayW, displayH } = display
    const stageStyle = {
        // border: "1px solid rgba(0,0,0,0.5)",
        // background: "rgba(0,0,0,0.023)",
        width: displayW - 4,
        height: displayH - 4,
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
