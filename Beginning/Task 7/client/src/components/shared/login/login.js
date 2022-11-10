import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Header } from "../header/header"

export const Login = () => {
    // const [clicked, setClicked] = useState(false)

    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (clicked)
    //         navigate('/forgetpassword')
    // }, [])

    // const goForgetPassword = setClicked(true)

    return (
        // --------------------------------------------- Login Section ---------------------------------------------
        <>
            <Header title="Login" />
            <header className="m-page">
                <h1 className="fs-1 text-black">Login</h1>
                {/* <Link className="btn btn-dark mt-5 fs-2" onClick={goForgetPassword} role="button">Forget Password?</Link> */}
                <Link className="btn btn-dark mt-5 fs-2" to="/forgetpassword" role="button">Forget Password?</Link>
            </header>
        </>
    )
}
