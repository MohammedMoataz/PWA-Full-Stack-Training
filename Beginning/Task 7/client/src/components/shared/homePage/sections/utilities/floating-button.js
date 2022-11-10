import React, { useEffect, useState } from 'react'

export const FloatingButton = () => {
    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)

        return () => {
            window.removeEventListener('scroll', checkScrollTop)
        }
    })

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 120)
            setShowScroll(true)
        else if (showScroll && window.pageYOffset <= 120)
            setShowScroll(false)
    }

    return (
        <div className="position-fixed floating-button">
            <a href="#home" className="bg-dark rounded-5 p-2" style={{ display: showScroll ? 'block' : 'none' }}><i className="fa-solid fa-angle-up text-white"></i></a>
        </div>
    )
}