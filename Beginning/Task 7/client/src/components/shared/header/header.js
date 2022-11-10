import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Header = (props) => {
    // const [clicked, setClicked] = useState(false)

    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (clicked)
    //         navigate(-1)
    // }, [])

    // const geBack = () => setClicked(true)

    return (
        <section id="login">
            <nav className="navbar navbar-expand-lg bg-dark shadow col-12" >
                <div className="container-fluid">
                    <div className="p-2 d-flex justify-content-start ms-5">
                        {/* <Link onClick={geBack} className="fs-3 me-3"><i className="fa-solid fa-circle-chevron-left"></i></Link> */}
                        {/* <Link to="/login" className="fs-3 me-3"><i className="fa-solid fa-circle-chevron-left"></i></Link> */}
                        <Link to={props.title === 'Login' ? "/" : "/login"} className="fs-3 me-3"><i className="fa-solid fa-circle-chevron-left"></i></Link>
                        <span className="fs-4">{props.title}</span>
                    </div>
                </div>
            </nav>
        </section>
    )
}