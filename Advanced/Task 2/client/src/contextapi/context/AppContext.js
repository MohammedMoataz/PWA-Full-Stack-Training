import React, { createContext, useReducer } from "react"

import { AppReducer } from "../reducer/AppReducer"
import data from "../../data.json"

export const AppContext = createContext({
	appState: {},
	appDispatch: () => { },
})

export const AppProvider = (props) => {
	const appInitialState = {
		options: data.options
			.filter(op => op.keywords
				.includes("فسر")),
		responses: data.responses,
		messages: data.messages,
		keywords: data.keywords
	}

	const [appState, appDispatch] = useReducer(AppReducer, appInitialState)

	return (
		<AppContext.Provider
			value={{
				appState,
				appDispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}
