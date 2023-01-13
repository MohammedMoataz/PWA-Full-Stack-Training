import { useContext } from "react"

import * as appActionType from "../../../contextapi/action/AppAction"
import { AppContext } from "../../../contextapi/context/AppContext"
import data from "../../../data.json"

export const Options = () => {
	const { appState, appDispatch } = useContext(AppContext)

	const handleClick = (option) => {
		appState.messages.push({ msg: option.option, type: "sender" })

		let response = appState.responses
			.find(res => res.index === option.response_index)
		appState.messages.push({ msg: response.response, type: "bot" })

		appState.options = data.options
			.filter(op => response.next_options_indexes
				.includes(op.index))

		appDispatch({
			type: appActionType.UPDATE_MESSAGES,
			payload: appState.messages
		})

		appDispatch({
			type: appActionType.UPDATE_OPTIONS,
			payload: appState.options
		})
	}

	return <div className="options">
		<p>Options:</p>
		<ul>
			{appState.options
				.map((op) => <li key={op.index}>
					<button onClick={e => handleClick(op)}>{op.option}</button>
				</li>)
			}
		</ul>
	</div>

}
