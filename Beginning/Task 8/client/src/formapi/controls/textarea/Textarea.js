import React from 'react'

import * as FormHelper from "../../FormHelper"

export const Textarea = (props) => {
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
            <textarea
                id={stateName}
                name={stateName}
                value={FormHelper.getValue(stateName, formStates)}
                onChange={handleInputChange(stateName)}
                {...rest}
            />
        </div>
    )
}