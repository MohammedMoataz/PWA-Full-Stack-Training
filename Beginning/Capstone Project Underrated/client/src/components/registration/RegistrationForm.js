import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

import { useForm } from '../../formapi/useForm'
import { FormControl } from '../../formapi/FormControl'
import { createUser, uploadFile } from '../../apis/index'
import { Header } from '../shared/header/header'
import { Footer } from '../shared/footer/footer'

export const RegistrationForm = () => {
    const navigate = useNavigate()
    const [formStates, setFormStates] = useState({
        fields: [
            { name: "photo", value: "" },
            { name: "name", value: "" },
            { name: "email", value: "" },
            { name: "password", value: "" },
            { name: "country", value: "" }
        ]
    })

    const {
        getCurrentFormValues,
        eventInputValue,
        eventResetForm
    } = useForm(
        formStates,
        setFormStates
    )

    const handleSubmit = async () => {
        let user = getCurrentFormValues(formStates)
        let formData = new FormData()
        formData.append('photo', formStates.fields[0].value)

        await uploadFile(formData)
            .then((res) => {
                user.photo = (res.data.isImgUploaded) ? res.data.filePath : null
            })
            .catch(err => console.log(err))

        await createUser(user)
            .then((res) => {
                sessionStorage.setItem("isLogedIn", 'true')
                sessionStorage.setItem("id", res.data.user.id)
                sessionStorage.setItem("photo", res.data.user.photo)
                sessionStorage.setItem("name", res.data.user.name)
                sessionStorage.setItem("email", res.data.user.email)
                sessionStorage.setItem("password", res.data.user.password)
                sessionStorage.setItem("country", res.data.user.country)
                navigate('/account')
            })
            .catch((err) => {
                console.log(err)
                navigate('/login')
            })
    }

    const handleClear = () => eventResetForm(formStates)

    return (
        <>
            <Header title="Registration" />

            <div className='d-flex flex-column justify-content-center align-items-center bg-primary text-white'>
                <h1 className='my-5'>Registration Form</h1>

                <form>
                    <FormControl
                        control='file'
                        stateName='photo'
                        label='Photo'
                        formStates={formStates}
                        eventInputValue={eventInputValue}
                    />

                    <FormControl
                        control='text'
                        stateName='name'
                        label='Name'
                        formStates={formStates}
                        eventInputValue={eventInputValue}
                    />

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

                    <FormControl
                        control='text'
                        stateName='country'
                        label='Country'
                        formStates={formStates}
                        eventInputValue={eventInputValue}
                    />

                    <div className='buttons'>
                        <button className='bg-warning border-0' type='reset' onClick={handleClear}>Clear Form</button>
                        <button className='bg-warning border-0' type='button' onClick={handleSubmit}>Submit Form</button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    )
}