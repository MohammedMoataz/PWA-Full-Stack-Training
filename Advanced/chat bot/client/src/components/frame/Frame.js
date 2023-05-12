import { State } from "../../reducer_api/state"
import { useChatbot } from "../../chatbot/useChatbot"
import { Messages } from "./messages/Messages"
import { Options } from "./options/Options"
import { Form } from "./form/Form"

import "./frame.css"

export const Frame = () => {
    const { chatbotState, chatbotDispatch } = State()

    const {
        handleOptionClick,
        handleMessageSubmit
    } = useChatbot(
        chatbotState,
        chatbotDispatch
    )

    return <div className="frame">
        <Messages messages={chatbotState.messages} />
        <Options options={chatbotState.options} handleOptionClick={handleOptionClick} />
        <Form handleMessageSubmit={handleMessageSubmit} />
    </div>
}