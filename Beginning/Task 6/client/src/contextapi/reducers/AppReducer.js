import * as appActionType from '../actions/AppAction'

//  Reducer Functions
export const AppReducer = (state, action) => {
    switch (action.type) {
        case appActionType.CHANGE_SEARCH_RESULT:
            return {
                ...state,
                newState: action.payload
            }

        case appActionType.CLEAR_SEARCH_RESULT:
            return {
                ...state,
                newState: action.payload
            }

        default:
            return state
    }
}
