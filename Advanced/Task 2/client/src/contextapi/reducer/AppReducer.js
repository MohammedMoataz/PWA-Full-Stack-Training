import * as appActionType from '../action/AppAction'

export const AppReducer = (state, action) => {
    switch (action.type) {
        case appActionType.UPDATE_OPTIONS:
            return {
                ...state,
                options: action.payload
            }

        case appActionType.UPDATE_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }

        case appActionType.UPDATE_KEYWORDS:
            return {
                ...state,
                keywords: action.payload
            }

        default:
            return state
    }
}
