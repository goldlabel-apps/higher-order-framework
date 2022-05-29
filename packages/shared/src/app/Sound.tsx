// @ts-nocheck
import * as React from 'react'
import { useAppSelector } from '../app/hooks'
import { getById } from '../app/utils'
import { selectClips, selectSSR } from '../features/system'
import { IconButton, CardHeader } from '@mui/material'
import { Icon } from '../theme'
import Sound from 'react-sound'

export interface SoundShape {
    id: string
}

export default function SoundPlayer(props: SoundShape) {
    const { id } = props
    const clips = useAppSelector(selectClips)

    const ssr = useAppSelector(selectSSR)

    const { assetsURL } = ssr
    // console.warn("assetsURL", assetsURL);
    const clip = getById(id, clips)
    const { title, subheader, icon } = clip
    const [playing, setPlaying] = React.useState(false)

    return (
        <React.Fragment>
            {playing ? (
                <Sound
                    url={`${assetsURL}/mp3/burbeep.mp3`}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={0}
                    onLoading={() => {}}
                    onPlaying={() => {}}
                    onFinishedPlaying={() => {
                        setPlaying(false)
                    }}
                />
            ) : null}
            <CardHeader
                title={title}
                subheader={subheader}
                avatar={
                    <IconButton
                        color="primary"
                        onClick={() => {
                            setPlaying(true)
                        }}
                    >
                        <Icon icon={icon} />
                    </IconButton>
                }
                action={
                    <IconButton
                        color="primary"
                        onClick={() => {
                            setPlaying(true)
                        }}
                    >
                        <Icon icon="fullscreen" />
                    </IconButton>
                }
            />
        </React.Fragment>
    )
}
