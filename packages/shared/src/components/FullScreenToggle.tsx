import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCore,
    setCore,
    Icon,
} from '../listingslab-shared'
import { IconButton } from '@mui/material'

export default function FullScreenToggle() {
    const dispatch = useAppDispatch()
    const core = useAppSelector(selectCore)
    const { fullScreen } = core.data

    return (
        <React.Fragment>
            {fullScreen ? (
                <IconButton
                    color="secondary"
                    onClick={() => {
                        dispatch(
                            setCore({
                                key: 'fullScreen',
                                value: false,
                            })
                        )
                    }}
                >
                    <Icon icon="exitfullscreen" />
                </IconButton>
            ) : (
                <IconButton
                    color="secondary"
                    onClick={() => {
                        dispatch(
                            setCore({
                                key: 'fullScreen',
                                value: true,
                            })
                        )
                    }}
                >
                    <Icon icon="fullscreen" />
                </IconButton>
            )}
        </React.Fragment>
    )
}
