import * as React from 'react'
import {
    useAppDispatch,
    useAppSelector,
    setFlash,
    getDisplay,
    selectFlash,
} from '../../../../listingslab-shared'

export default function Cannatown(props) {
    const { children } = props
    const dispatch = useAppDispatch()
    const flash = useAppSelector(selectFlash)

    React.useEffect(() => {
        const { display } = flash.data
        if (!display) {
            dispatch(setFlash({ key: 'display', value: getDisplay() }))
        }
    }, [flash, dispatch])

    const { display } = flash.data
    if (!display) return null
    const { displayW, displayH } = display

    let appDimensions = {
        margin: 'auto',
        width: 320,
        height: displayH - 10,
    }
    if (displayW > 850) {
        appDimensions = {
            ...appDimensions,
            width: 840,
        }
    }

    const cannatownStyle = {
        ...appDimensions,
        border: '1px solid rgba(0,0,0,1)',
        background: 'rgba(0,0,0,1)',
        overflow: 'hidden',
        zIndex: 1,
        postition: 'relative',
    }

    return (
        <div id="cannatown-stage" style={cannatownStyle}>
            {children}
        </div>
    )
}
