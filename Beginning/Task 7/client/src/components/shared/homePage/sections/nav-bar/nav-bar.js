import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

import logo from '../../../assets/logo.png'

export const NavBar = () => {
    // const [clicked, setClicked] = useState(false)

    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (clicked)
    //         navigate("/login")
    // }, [])

    //  Routes
    // const goLogin = () => setClicked(true)

    const goMyAccount = () => { }

    const goLogout = () => { }

    //  Components
    let isLogedIn = false

    let loginComponent = (
        isLogedIn ?
            <div className="d-flex justify-content-between flex-wrap col-6 col-xl-5">
                <button className="btn btn-dark fw-semibold rounded-5 mt-3 mt-xl-0 px-4" onClick={goMyAccount}>MyAccount</button>
                <button className="btn btn-dark fw-semibold rounded-5 my-3 my-xl-0 px-4" onClick={goLogout}>Logout</button>
            </div> :
            // <button className="btn btn-dark fw-semibold rounded-5 px-4" onClick={goLogin}>Login</button>
            <Link className="btn btn-dark fw-semibold rounded-5 px-4" to="/login">Login</Link>
    )


    return (
        // --------------------------------------------- Navigation Bar Section ---------------------------------------------
        <nav className="navbar navbar-expand-lg bg-white position-fixed top-0 shadow col-12" >
            <div className="container">
                <Link className="navbar-brand p-3 fs-4 fw-semibold" to="#"><img src={logo} className="me-3"
                    alt="CBMIS logo" />CBMIS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav col-7 justify-content-between">
                        <li className="nav-item fw-semibold fs-5">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item fw-semibold fs-5">
                            <a className="nav-link" href="#about-us">About Us</a>
                        </li>
                        <li className="nav-item fw-semibold fs-5">
                            <a className="nav-link" href="#contact-us">Contact Us</a>
                        </li>
                        {loginComponent}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
