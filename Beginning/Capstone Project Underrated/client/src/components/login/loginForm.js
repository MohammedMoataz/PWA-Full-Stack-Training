import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useForm } from '../../formapi/useForm'
import { FormControl } from '../../formapi/FormControl'
import { login } from '../../apis/index'
import { Header } from "../shared/header/header"
import { Footer } from '../shared/footer/footer'

export const LoginForm = () => {
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)
    const [formStates, setFormStates] = useState({
        fields: [
            { name: "email", value: "" },
            { name: "password", value: "" }
        ]
    })

    const {
        getCurrentFormValues,
        eventInputValue
    } = useForm(
        formStates,
        setFormStates
    )

    useEffect(() => {
        if (clicked)
            navigate('/forgetpassword')
    }, [clicked, navigate])

    const handleSubmit = async () => {
        let userLogin = getCurrentFormValues(formStates)
        await login(userLogin)
            .then((res) => {
                if (res.data.response === "Incorrecet password!!!") {
                    alert("Incorrecet password!!!")
                    window.location.reload(false)
                } else {
                    sessionStorage.setItem("id", res.data.user.id)
                    sessionStorage.setItem("isLogedIn", 'true')
                    navigate('/reels')
                }
            })
            .catch(() => {
                alert("Email or password is not correct!!!")
                window.location.reload(false)
            })
    }

    const goForgetPassword = () => setClicked(true)

    return (
        // --------------------------------------------- Login Section ---------------------------------------------
        <>
            <Header title="Login" />
            <div className='d-flex flex-column justify-content-center align-items-center bg-primary text-white py-5'>
                <h1 className='my-5'>Login Form</h1>

                <form>
                    <FormControl
                        control='email'
                        stateName='email'
                        label='Email Address'
                        formStates={formStates}
                        eventInputValue={eventInputValue}
                    />

                    <FormControl
                        control='password'
                        stateName='password'
                        label='Password'
                        formStates={formStates}
                        eventInputValue={eventInputValue}
                    />

                    <Link className="text-white" onClick={goForgetPassword}>Forget Password?</Link>

                    <div className='buttons flex-column py-5'>
                        <button className='bg-warning border-0' type='button' onClick={handleSubmit}>Submit Form</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}
