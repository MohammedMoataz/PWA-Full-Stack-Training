import React from 'react'

import * as FormHelper from "../../FormHelper"

export const Date = (props) => {
    const {
        formStates,
        stateName,
        label,
        eventDateValue,
        eventDateError,
        ...rest
    } = props

    const handleDateChange = stateName => e => {
        const input = e.target.value
        eventDateValue(stateName, input)
    }

    return (
        <div>
            <label htmlFor={stateName}>{label}</label>
            <input
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