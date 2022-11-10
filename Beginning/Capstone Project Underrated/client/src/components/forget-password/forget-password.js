import { useState } from "react"

import { useForm } from '../../formapi/useForm'
import { FormControl } from '../../formapi/FormControl'
import { Header } from "../shared/header/header"
import { getUserByEmail, sendMail } from "../../apis"

export const ForgetPassword = () => {
    const [formStates, setFormStates] = useState({
        fields: [
            { name: "email", value: "" },
        ]
    })

    const {
        getCurrentFormValues,
        eventInputValue
    } = useForm(
        formStates,
        setFormStates
    )

    const handleSubmit = async () => {
        let email = getCurrentFormValues(formStates)
        var password

        await getUserByEmail(email)
            .then(res => {
                password = res.data.user.password
                alert('Check your mail!')
            })

        await sendMail({
            to: email.email,
            text: `Your password is ${password}`
        })
            .catch(err => {
                console.error(err)
                window.location.reload(false)
            })
    }

    return (
        // --------------------------------------------- Forget Password Section ---------------------------------------------
        <>
            <Header title="Forget Password" />
            <div className='d-flex flex-column justify-content-center align-items-center bg-primary text-white'>
                <h1 className='mt-5'>Reset Password Form</h1>

                <form>
                    <FormControl
                        control='email'
                        stateName='email'
                        label='Email Address'
                        formStates={formStates}
                        eventInputValue={eventInputValue}
                    />

                    <div className='buttons'>
                        <button className='bg-warning border-0' type='button' onClick={handleSubmit}>Send Mail</button>
                    </div>
                </form>
            </div>
        </>
    )
}
