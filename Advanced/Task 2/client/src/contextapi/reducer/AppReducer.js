import * as appActionType from '../action/AppAction'

export const AppReducer = (state, action) => {
    switch (action.type) {
        case appActionType.GET_OPTIONS:
            return {
                ...state,
                options: action.payload
            }

        case appActionType.UPDATE_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }

        default:
            return state
    }
}
