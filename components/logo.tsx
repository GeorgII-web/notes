import React from 'react'

function Logo() {
    return (
        <div>
            <svg height="10" width="10">
                <circle cx="10" cy="10" r="8" fill="red"/>
            </svg>
            <span>GeorgII-web</span>
        </div>
    )
}

export default function MyApp() {
    return <Logo/>
}
