import React, { createContext, useReducer } from 'react'

import { AppReducer } from '../reducer/AppReducer'

export const AppContext = createContext({
    appState: {},
    appDispatch: {}
})

export const AppProvider = props => {
    const appInitialState = {
        root: { id: 1 },
        countries: [],
        states: [],
        cities: []
    }

    const [appState, appDispatch] = useReducer(AppReducer, appInitialState)

    return (
        <AppContext.Provider
            value={{
                appState,
                appDispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}