import React from 'react'

import * as FormHelper from "../../FormHelper"

export const Date = (props) => {
    const {
        formStates,
        stateName,
        label,
        eventInputValue,
        eventInputError,
        ...rest
    } = props

    const handleDateChange = stateName => e => {
        const input = e.target.value
        eventInputValue(stateName, input)
    }

    return (
        <div className="mb-3">
            <label htmlFor={stateName} className="form-label">{label}</label>
            <input
                className='form-control'
                type="date"
                id={stateName}
                name={stateName}
                value={FormHelper.getValue(stateName, formStates)}
                onChange={handleDateChange(stateName)}
                {...rest}
            />
        </div>
    )
}