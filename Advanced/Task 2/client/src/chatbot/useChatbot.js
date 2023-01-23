import * as actionType from "../reducer_api/actions"
import * as chatbotHelper from "./chatbotHelper"

export const useChatbot = (chatbotState, chatbotDispatch) => {
    const handleOptionClick = op => chatbotDispatch({
        type: actionType.UPDATE_STATE,
        payload: chatbotHelper.handleOptionClick(chatbotState, op)
    })

    const handleMessageSubmit = msg => chatbotDispatch({
        type: actionType.UPDATE_STATE,
        payload: chatbotHelper.handleMessageSubmit(chatbotState, msg)
    })

    return ({
        handleOptionClick,
        handleMessageSubmit
    })
}