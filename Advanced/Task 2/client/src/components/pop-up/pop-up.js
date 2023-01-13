import { useContext } from "react"

import { AppContext } from "../../contextapi/context/AppContext"
import * as appActionType from "../../contextapi/action/AppAction"
import data from "../../data.json"

import "./pop-up.css"

export const PopUp = () => {
    // eslint-disable-next-line no-unused-vars
    const { appState, appDispatch } = useContext(AppContext)

    const handleClose = (e) => {
        e.target.parentNode.parentNode.parentNode.style = "display: none"
    }

    const handleRetry = (e) => {
        appDispatch({
            type: appActionType.UPDATE_OPTIONS,
            payload: data.options
                .filter(op => op.keywords
                    .includes("فسر"))
        })

        appDispatch({
            type: appActionType.UPDATE_MESSAGES,
            payload: []
        })

        appDispatch({
            type: appActionType.UPDATE_KEYWORDS,
            payload: data.keywords
        })
    }

    return <div className="pop-up-overlay">
        <div className="pop-up">
            <div className="pop-up-header">
                <h1 className="pop-up-title">انتهت المحادثة</h1>
                <button type="button" className="pop-up-close" onClick={handleClose}>X</button>
            </div>
            <div className="buttons">
                <button type="button" className="pop-up-action retry" onClick={handleRetry}>إعادة المحاولة</button>
                <button type="button" className="pop-up-action close" onClick={handleClose}>x خروج</button>
            </div>
        </div>
    </div>
}