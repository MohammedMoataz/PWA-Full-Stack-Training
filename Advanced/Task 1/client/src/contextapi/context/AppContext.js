import React, { createContext, useReducer } from 'react'

import { AppReducer } from '../reducer/AppReducer'

export const AppContext = createContext({
    appState: {},
    appDispatch: {}
})

export const AppProvider = props => {
    const appInitialState = {
        root: { id: 1 },
        regions: {},
        countries: [],
        states: [],
        cities: [],
        country: {},
        state: {},
        city: {}
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