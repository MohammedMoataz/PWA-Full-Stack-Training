import * as appActionType from "./actions"

export const Reducer = (state, action) => {
    switch (action.type) {
        case appActionType.UPDATE_STATE:
            return {
                messages: action.payload.messages,
                options: action.payload.options
            }

        default:
            return state
    }
}