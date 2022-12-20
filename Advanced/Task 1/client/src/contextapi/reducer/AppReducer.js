import * as appActionType from '../action/AppAction'

export const AppReducer = (state, action) => {
    switch (action.type) {
        case appActionType.GET_ALL:
            return {
                ...state,
                regions: action.payload
            }

        case appActionType.GET_COUNTRIES:
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

        case appActionType.ADD_COUNTRY:
        case appActionType.UPDATE_COUNTRY:
        case appActionType.GET_COUNTRY:
            return {
                ...state,
                country: action.payload
            }

        case appActionType.ADD_STATE:
        case appActionType.UPDATE_STATE:
        case appActionType.GET_STATE:
            return {
                ...state,
                state: action.payload
            }

        case appActionType.ADD_CITY:
        case appActionType.UPDATE_CITY:
        case appActionType.GET_CITY:
            return {
                ...state,
                city: action.payload
            }

        default:
            return state
    }
}
