import { useContext } from "react"

import { UPDATE_MESSAGES } from "../../../contextapi/action/AppAction"
import { AppContext } from "../../../contextapi/context/AppContext"

export const Options = () => {
	const { appState, appDispatch } = useContext(AppContext)

	const handleClick = (e) => {
		let newMsg = { msg: e.target.outerText, type: "sender" }

		appState.messages.push(newMsg)

		appDispatch({
			type: UPDATE_MESSAGES,
			payload: appState.messages
		})

		let newKeywords = newMsg.msg
			.split(" ")
			.map(word => word.length > 3
				? word
					.replaceAll("است", "")
					.replaceAll("ي", "ا")
					.replaceAll("ون", "")
					.replaceAll("ين", "")
					.replaceAll("ة", "")
					.replaceAll("ه", "")
					.replaceAll("ال", "")
					.replaceAll("كم", "")
					.replaceAll("أسعار", "سعر")
					.replaceAll("أ", "")
				: word
			)

		let response = appState.responses.map(res => res.keywords.some(checkKeyword) ? res : res)
		appState.messages.push({ msg: response.find(res => newKeywords.includes(res.keywords[0])).response, type: "bot" })

		appDispatch({
			type: UPDATE_MESSAGES,
			payload: appState.messages
		})
	}

	const checkKeyword = (keyword) => appState.keywords.includes(keyword)

	return <div className="options">
		<p>Options:</p>
		<ul>
			{appState.options.map((op, index) => op.keywords.some(checkKeyword)
				? <li key={index}><button onClick={handleClick}>{op.option}</button></li>
				: null
			)}
		</ul>
	</div>

}
