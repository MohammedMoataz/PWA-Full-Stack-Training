import { useContext, useEffect, useState } from "react"

import { UPDATE_MESSAGES } from "../../../contextapi/action/AppAction"
import { AppContext } from "../../../contextapi/context/AppContext"

export const Form = () => {
  const [msg, setMsg] = useState("")
  const { appState, appDispatch } = useContext(AppContext)

  useEffect(() => {
    console.log("Messages: ", appState.messages)
  }, [appState])

  const handleSubmit = (e) => {
    e.preventDefault()

    appState.messages.push({ msg, type: "sender" })
    appDispatch({
      type: UPDATE_MESSAGES,
      payload: appState.messages
    })

    e.target[0].value = ""
    setMsg("")
  }

  return (
    <div className="send-msg">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message"
          onChange={(e) => setMsg(e.target.value)}
        />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fdf8f6" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </button>
      </form>
    </div>
  )
}


/*

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

  const checkKeyword = (keyword) => appState.keywords.includes(keyword)
op.keywords.some(checkKeyword)

*/