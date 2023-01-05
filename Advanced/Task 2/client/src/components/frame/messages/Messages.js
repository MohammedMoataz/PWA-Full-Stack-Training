import { useContext } from "react"

import { AppContext } from "../../../contextapi/context/AppContext"

export const Messages = () => {
    // eslint-disable-next-line no-unused-vars
    const { appState, appDispatch } = useContext(AppContext)
  
    return (
        <div className="messages">
            <ul>
                {appState.messages.map((msg, index) =>
                    <li
                        key={index}
                        className={msg.type}
                    >
                        {msg.msg}
                    </li>
                )}
            </ul>
        </div>
    )
}