import React from 'react'

import * as FormHelper from "../../FormHelper"

export const Text = (props) => {
    const {
        formStates,
        stateName,
        label,
        eventInputValue,
        eventInputError,
        ...rest
    } = props

    const handleInputChange = stateName => e => {
        const input = e.target.value
        eventInputValue(stateName, input)
    }

    return (
        <div>
            <label htmlFor={stateName}>{label}</label>
            <input
                type="text"
                id={stateName}
                name={stateName}
                value={FormHelper.getValue(stateName, formStates)}
                onChange={handleInputChange(stateName)}
                {...rest}
            />
        </div>
    )
}