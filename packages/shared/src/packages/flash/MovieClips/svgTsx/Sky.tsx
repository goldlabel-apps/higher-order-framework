import React from 'react'

const Sky = (props: any) => {
    return (
        <svg {...props} viewBox="0 0 1000 1000">
            <defs>
                <radialGradient
                    cx="50%"
                    cy="0%"
                    fx="50%"
                    fy="0%"
                    r="100%"
                    id="radialGradient-1"
                >
                    <stop stop-color="#EEEEEE" offset="0.0437062937%"></stop>
                    <stop stop-color="#6EC1D4" offset="100%"></stop>
                </radialGradient>
            </defs>
            <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
            >
                <g id="Sky" fill="url(#radialGradient-1)">
                    <rect
                        id="skyShape"
                        x="0"
                        y="0"
                        width="1000"
                        height="1000"
                    ></rect>
                </g>
            </g>
        </svg>
    )
}

export default Sky
