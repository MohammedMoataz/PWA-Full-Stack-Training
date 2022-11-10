import { Link } from "react-router-dom"

import logo from '../../../assets/logo.png'

export const Footer = () => {
    return (
        // --------------------------------------------- Footer Section ---------------------------------------------
        <footer className="navbar navbar-expand-lg bg-dark p-2">
            <div className="container-fluid">
                <Link className="navbar-brand ps-5 fs-4 fw-semibold text-white" to="/"><img src={logo} className="me-3"
                    alt="CBMIS logo" />CBMIS</Link>
            </div>
        </footer>
    )
}
