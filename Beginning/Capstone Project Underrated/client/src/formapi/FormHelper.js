export const resetFormStates = fromStates => {
    let fields = fromStates.fields
    let values = []

    fields.map(item => {
        let newObject = { name: item.name, value: {} }
        values = [...values, newObject]
        return null
    })

    return {
        ...fromStates,
        fields: values
    }
}

export const getFromValues = formStates => {
    let fields = formStates.fields
    let values = {}

    fields.map(item => values[item.name] = item.value)

    return values
}

export const getValuesByStateName = (stateName, formStates) => {
    let fields = formStates.fields
    let stateIndex = fields.findIndex(item => item.name === stateName)

    let value = fields[stateIndex].value

    return (
        Array.isArray(value)
            ? JSON.stringify(value)
            : value
    )
}

export const getValue = (stateName, formStates) => {
    if (formStates) {
        let fields = formStates.fields
        let stateIndex
        if (Array.isArray(fields)) {
            stateIndex = Array.from(fields).findIndex(item => item.name === stateName)
            return fields[stateIndex].value
        }
    }
}

export const updateValue = (newValue, stateName, formStates) => {
    let fields = formStates.fields
    let stateIndex

    if (Array.isArray(fields)) {
        stateIndex = fields.findIndex(item => item.name === stateName)

        let newObject = { name: fields[stateIndex].name, value: newValue }
        let updatedFields = [
            ...formStates.fields.slice(0, stateIndex),
            newObject,
            ...formStates.fields.slice(stateIndex + 1)
        ]

        return {
            ...formStates,
            fields: updatedFields
        }
    }
}
