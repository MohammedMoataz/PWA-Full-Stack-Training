export const resetFormStates = (fromStates) => {
    const fields = fromStates.fields
    let values = []

    fields.map((item) => {
        const newObject = { name: item.name, value: "" }
        values = [...values, newObject]
    })

    return {
        ...fromStates,
        fields: values
    }
}

export const getFromValues = (formStates) => {
    const fields = formStates.fields
    let values = {}

    fields.map(item => values[item.name] = item.value)

    return JSON.stringify(values)
}

export const getValuesByStateName = (stateName, formStates) => {
    const fields = formStates.fields
    const stateIndex = fields.findIndex(item => item.name === stateName)

    const value = fields[stateIndex].value

    return (
        Array.isArray(value)
            ? JSON.stringify(value)
            : value
    )
}

export const getValue = (stateName, formStates) => {
    const fields = formStates.fields
    const stateIndex = fields.findIndex(item => item.name === stateName)

    return fields[stateIndex].value
}

export const updateValue = (newValue, stateName, formStates) => {
    const fields = formStates.fields
    const stateIndex = fields.findIndex(item => item.name === stateName)

    const newObject = { name: fields[stateIndex].name, value: newValue }
    const updatedFields = [
        ...formStates.fields.slice(0, stateIndex),
        newObject,
        ...formStates.fields.slice(stateIndex + 1)
    ]

    return {
        ...formStates,
        fields: updatedFields
    }
}
