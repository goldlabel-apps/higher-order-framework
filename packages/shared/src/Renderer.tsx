import * as React from 'react'
// import { getAuth } from "firebase/auth";
import {
    useAppDispatch,
    useAppSelector,
    selectFlash,
    setFlash,
    initFlash,
} from './listingslab-shared'

export default function Renderer() {
    const dispatch = useAppDispatch()
    const flash = useAppSelector(selectFlash)

    React.useEffect(() => {
        // const { ready } = persona.data
        // console.warn("flash", flash);
        const { initted, ready } = flash.data;
        if (!initted && !ready) {
            // initFlash()
            // dispatch(initFlash())
            dispatch(setFlash({ key: "ready", value: false }))
            dispatch(setFlash({ key: "initted", value: true}))
        }
    }, [flash, dispatch])

    return null
}

/*
<React.Fragment>
        <pre>{ JSON.stringify(flash.data, null, 2 ) }</pre>
    </React.Fragment>
*/