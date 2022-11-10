import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

import { useForm } from '../../formapi/useForm'
import { FormControl } from '../../formapi/FormControl'
import { Header } from '../shared/header/header'
import { Footer } from '../shared/footer/footer'
import { createReel, uploadFile } from '../../apis'

export const CreateReel = () => {
    const navigate = useNavigate()
    const [formStates, setFormStates] = useState({
        fields: [
            { name: "photo", value: "" },
            { name: "caption", value: "" },
            { name: "date", value: "" },
            { name: "location", value: "" },
            { name: "userId", value: "" }
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
        let reel = getCurrentFormValues(formStates)
        reel.date = '2022-05-10'
        reel.userId = sessionStorage.getItem("id")
        console.log(reel)

        let formData = new FormData()
        formData.append('photo', formStates.fields[0].value)

        await uploadFile(formData)
            .then(res => reel.photo = (res.data.isImgUploaded) ? res.data.filePath : null)
            .catch(err => console.log(err))

        await createReel(reel)
            .then(() => navigate('/reels'))
            .catch(err => console.log(err))
    }

    const handleClear = () => eventResetForm(formStates)

    return (
        <>
            <Header title="Create Reel" />

            <div className='d-flex flex-column justify-content-center align-items-center bg-primary text-white'>
                <h1 className='mt-5'>Create Reel</h1>

                <form>
                    <FormControl
                        control='file'
                        stateName='photo'
                        label='Photo'
                        formStates={formStates}
                        eventInputValue={eventInputValue}
                    />

                    <FormControl
                        control='textarea'
                        stateName='caption'
                        label='Caption'
                        formStates={formStates}
                        eventInputValue={eventInputValue}
                    />

                    <FormControl
                        control='text'
                        stateName='location'
                        label='Location'
                        formStates={formStates}
                        eventInputValue={eventInputValue}
                    />

                    <div className='buttons'>
                        <button className='bg-warning border-0' type='button' onClick={handleClear}>Clear Form</button>
                        <button className='bg-warning border-0' type='button' onClick={handleSubmit}>Submit Form</button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    )
}