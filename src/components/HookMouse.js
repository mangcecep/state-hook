import React , { useState, useEffect } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosisiton = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=> {
        console.log('useEffect Called')
        window.addEventListener('mousemove', logMousePosisiton)

        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosisiton)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
