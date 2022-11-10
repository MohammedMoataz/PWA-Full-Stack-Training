import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

import logo from '../../../assets/logo192.png'

export const NavBar = () => {
    const [loginComponent, setLoginComponent] = useState(<></>)
    const [isLogedIn, setIsLogedIn] = useState('true')
    const navigate = useNavigate()

    useEffect(() => {
        sessionStorage.setItem("isLogedIn", isLogedIn)

        const goRegistration = () => navigate("/registration")

        const goLogin = () => navigate("/login")

        const goMyAccount = () => navigate("/account")

        const goLogout = () => setIsLogedIn('false')

        if (isLogedIn === 'true') {
            setLoginComponent(<div className="d-flex justify-content-between flex-wrap col-5">
                <button className="btn btn-warning fw-semibold rounded-5 px-0 m-0" onClick={goMyAccount}>MyAccount</button>
                <button className="btn btn-warning fw-semibold rounded-5 px-0 m-0" onClick={goLogout}>Logout</button>
            </div>)
        } else {
            setLoginComponent(<div className='d-flex justify-content-between flex-wrap col-6 col-xl-4'>
                <button className="btn btn-warning fw-semibold rounded-5 px-0 m-0" onClick={goLogin}>Login</button>
                <button className="btn btn-warning fw-semibold rounded-5 px-0 m-0" onClick={goRegistration}>Registration</button>
            </div>)
            navigate("/home")
        }

    }, [isLogedIn, navigate])

    return (
        // --------------------------------------------- Navigation Bar Section ---------------------------------------------
        <nav className="navbar navbar-expand-lg bg-light position-sticky top-0 shadow col-12" >
            <div className="container">
                <Link className="navbar-brand p-3 fs-4 fw-semibold" to="/home"><img src={logo} className="me-3"
                    alt="Underrated logo" />Underrated</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav col-8 justify-content-between align-items-center">
                        <li className="nav-item fw-semibold fs-5">
                            <a className="nav-link" href="/home/#home">Home</a>
                        </li>
                        <li className="nav-item fw-semibold fs-5">
                            <a className="nav-link" href="/home/#about-us">About Us</a>
                        </li>
                        <li className="nav-item fw-semibold fs-5">
                            <a className="nav-link" href="/home/#contact-us">Contact Us</a>
                        </li>
                        {loginComponent}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
