import { Link } from "react-router-dom"

import logo from '../../../assets/logo192.png'

export const Footer = () => {
    return (
        // --------------------------------------------- Footer Section ---------------------------------------------
        <footer className="navbar navbar-expand-lg bg-light p-4 w-100 shadow">
            <div className="container-fluid justify-content-center">
                <Link className="navbar-brand ps-5 fs-4 fw-semibold text-dark" to="/"><img src={logo} className="me-3"
                    alt="Underrated logo" />CopyRight - 2022 &copy; Eng: Mohammed Moataz</Link>
            </div>
        </footer>
    )
}
