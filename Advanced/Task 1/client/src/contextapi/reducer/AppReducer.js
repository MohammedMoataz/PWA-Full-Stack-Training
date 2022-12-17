import * as appActionType from '../action/AppAction'

export const AppReducer = (state, action) => {
    switch (action.type) {
        case appActionType.GET_ALL:
            return {
                ...state,
                regions: action.payload
            }

        case appActionType.GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }

        case appActionType.GET_STATES:
            return {
                ...state,
                states: action.payload
            }

        case appActionType.GET_CITIES:
            return {
                ...state,
                cities: action.payload
            }

        default:
            return state
    }
}
