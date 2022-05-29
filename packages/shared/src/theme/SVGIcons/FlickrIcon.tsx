import * as React from 'react'
import { useTheme, SvgIcon } from '@mui/material'

export default function FlickrIcon(props) {
    let mainColor = 'red'
    const theme = useTheme()
    mainColor = theme.palette.primary.main

    return (
        <SvgIcon {...props}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect
                    fillOpacity="0"
                    fill="#FFFFFF"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                ></rect>

                <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                >
                    <g
                        id="SVGIcon"
                        transform="translate(-2.000000, -1.000000)"
                        fill={mainColor}
                        fill-rule="nonzero"
                    >
                        <g
                            id="flickr"
                            transform="translate(2.000000, 1.000000)"
                        >
                            <path
                                d="M0,0 L0,21 L21,21 L21,0 L0,0 Z M19.7010309,19.7010309 L1.29896907,19.7010309 L1.29896907,1.29896907 L19.7010309,1.29896907 L19.7010309,19.7010309 Z"
                                id="Shape"
                            ></path>
                            <path
                                d="M7.00036124,13 C8.65700059,13 10,11.6567382 10,10.00075 C10,8.34326183 8.65700059,7 7.00036124,7 C5.34299941,7 4,8.34330469 4,10.00075 C4,11.656781 5.34299941,13 7.00036124,13 Z"
                                id="Path"
                            ></path>
                            <path
                                d="M13.9996388,13 C15.6570431,13 17,11.6567382 17,10.00075 C17,8.34326183 15.6570006,7 13.9996388,7 C12.3429994,7 11,8.34326183 11,10.00075 C11,11.656781 12.3429569,13 13.9996388,13 Z"
                                id="Path"
                            ></path>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
}
