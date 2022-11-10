import React, { useState } from 'react'

import { useForm } from '../formapi/useForm'
import { FormControl } from '../formapi/FormControl'

export const RegistraitonForm = () => {
    const [formStates, setFormStates] = useState({
        fields: [
            { name: "fullName", value: "" },
            { name: "dob", value: "" },
            { name: "address", value: "" },
            { name: "email", value: "" },
            { name: "password", value: "" }
        ]
    })

    const {
        getCurrentFormValues,
        eventInputValue,
        eventDateValue,
        eventResetForm
    } = useForm(
        formStates,
        setFormStates
    )

    const handleSubmit = () => {
        getCurrentFormValues(formStates)
    }

    const handleClear = () => {
        eventResetForm(formStates)
    }

    return (
        <form>
            <FormControl
                control='text'
                stateName='fullName'
                label='Full Name'
                formStates={formStates}
                eventInputValue={eventInputValue}
            />

            <FormControl
                control='date'
                stateName='dob'
                label='Date of Birth'
                formStates={formStates}
                eventDateValue={eventDateValue}
            />

            <FormControl
                control='textarea'
                stateName='address'
                label='Address'
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

            <div className='buttons'>
                <button type='button' onClick={handleClear}>Clear Form</button>
                <button type='button' onClick={handleSubmit}>Submit Form</button>
            </div>
        </form>
    )
}