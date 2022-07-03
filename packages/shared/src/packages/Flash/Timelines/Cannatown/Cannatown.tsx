import * as React from 'react'
import {
    useAppDispatch,
    useAppSelector,
    setFlash,
    getDisplay,
    selectFlash,
} from '../../../../listingslab-shared'

export default function Cannatown(props) {
    const dispatch = useAppDispatch()
    const flash = useAppSelector(selectFlash)

    const { display } = flash.data
    if (!display) return null
    const { displayW, displayH } = display

    let dimensions = {
        width: 500,
        height: 200,
    }

    const cannatownStyle = {
        ...dimensions,
        border: '1px solid rgba(0,0,0,1)',
        background: 'rgba(0,0,0,0.1)',
        overflow: 'hidden',
        postition: 'relative',
    }

    return <div id="cannatown-stage" style={cannatownStyle} />
}
