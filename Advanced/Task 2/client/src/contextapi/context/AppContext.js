import React, { createContext, useReducer } from "react"

import { AppReducer } from "../reducer/AppReducer"

export const AppContext = createContext({
	appState: {},
	appDispatch: () => { },
})

export const AppProvider = (props) => {
	const appInitialState = {
		options: [
			{
				option: "أريد حجز غرفة",
				keywords: ["فسر", "حجز"]
			},
			{
				option: "أريد أن أعرف أسعار الغرف",
				keywords: ["فسر", "سعر"]
			},
			{
				option: "أين مكانكم ؟",
				keywords: ["فسر", "مكان"]
			}
		],
		messages: [
			{
				msg: "مرحبا بك, كيف يمكنني خدمتك ؟",
				type: "bot"
			}
		],
		responses: [
			{
				response: "نحن نتواجد في الاسكندرية والغردقة",
				keywords: ["مكان"]
			},
			{
				response: "الغرفة الفردي تكلف 500 جنية والزوجي تكلف 750 جنية",
				keywords: ["سعر"]
			}
		],
		keywords: ["فسر"]
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
