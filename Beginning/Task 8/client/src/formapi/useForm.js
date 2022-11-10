import * as FormHelper from './FormHelper'

export const useForm = (formStates, setFormStates) => {
    const getCurrentFormValues = () => {
        const formValues = FormHelper.getFromValues(formStates)
        alert(formValues)
        setFormStates(formValues)
    }

    const getValuesByStateName = (stateName) => {
        let values = FormHelper.getValuesByStateName(stateName, formStates)
        setFormStates(values)
    }

    const eventInputValue = (stateName, newTextInput) => {
        let newFormStates = FormHelper.updateValue(newTextInput, stateName, formStates)
        setFormStates(newFormStates)
    }

    const eventDateValue = (stateName, newDate) => {
        let newFormStates = FormHelper.updateValue(newDate, stateName, formStates)
        setFormStates(newFormStates)
    }

    const eventResetForm = () => {
        const newState = FormHelper.resetFormStates(formStates)
        setFormStates(newState)
    }

    return ({
        getCurrentFormValues,
        getValuesByStateName,
        eventInputValue,
        eventDateValue,
        eventResetForm
    })
} 