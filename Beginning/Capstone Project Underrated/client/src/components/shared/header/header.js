import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Header = (props) => {
    const [clicked, setClicked] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (clicked)
            navigate(-1)
    }, [clicked, navigate])

    const geBack = () => setClicked(true)

    return (
        <section id="login">
            <nav className="navbar navbar-expand-lg bg-light shadow col-12" >
                <div className="container-fluid">
                    <div className="p-2 d-flex justify-content-start align-items-center ms-5">
                        <Link onClick={geBack} className="fs-1 me-3 text-warning"><i className="fa-solid fa-circle-chevron-left"></i></Link>
                        <span className="fs-3">{props.title}</span>
                    </div>
                </div>
            </nav>
        </section>
    )
}