import React, { createContext, useReducer } from 'react'

import { AppReducer } from '../reducers/AppReducer'

//  App Context
export const AppContext = createContext({})

//  App Provider
export const AppProvider = (props) => {
    const appInitialState = ''

    const [appState, appDispatch] = useReducer(AppReducer, appInitialState)

    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            {props.children}
        </AppContext.Provider>
    )
}