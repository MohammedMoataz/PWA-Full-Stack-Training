import * as FormHelper from './FormHelper'

export const useForm = (formStates, setFormStates) => {
    const getCurrentFormValues = () => {
        let formValues = FormHelper.getFromValues(formStates)

        setFormStates(formValues)
        return formValues
    }

    const getValuesByStateName = (stateName) => {
        let values = FormHelper.getValuesByStateName(stateName, formStates)
        setFormStates(values)
    }

    const eventInputValue = (stateName, newTextInput) => {
        let newFormStates = FormHelper.updateValue(newTextInput, stateName, formStates)
        setFormStates(newFormStates)
    }

    const eventResetForm = () => {
        let newState = FormHelper.resetFormStates(formStates)
        setFormStates(newState)
    }

    return ({
        getCurrentFormValues,
        getValuesByStateName,
        eventInputValue,
        eventResetForm
    })
} 