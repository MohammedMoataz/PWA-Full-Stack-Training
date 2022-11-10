import React from 'react'
import { uploadFile } from '../../../apis'

export const File = (props) => {
    const {
        formStates,
        stateName,
        label,
        eventInputValue,
        eventInputError,
        ...rest
    } = props

    const handleInputChange = stateName => async e => {
        const input = e.target.files[0]

        eventInputValue(stateName, input)
    }

    return (
        <div className="input-group mb-3">
            <label htmlFor={stateName}>{label}</label>
            <input
                type="file"
                className="form-control"
                id={stateName}
                name={stateName}
                onChange={handleInputChange(stateName)}
                {...rest}
            />
        </div>
    )
}