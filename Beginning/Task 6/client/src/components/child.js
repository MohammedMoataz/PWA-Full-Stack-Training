import { useContext } from "react"

import * as appActionType from '../contextapi/actions/AppAction'
import { AppContext } from "../contextapi/contexts/AppContext"
import { GrandChild } from "./grandchild"

export const Child = (props) => {
    const { appState, appDispatch } = useContext(AppContext)

    const handleClear = () => {
        appDispatch({
            type: appActionType.CLEAR_SEARCH_RESULT,
            payload: ''
        })
    }

    return (
        <div className="child">
            <h3>Child Component</h3>

            <p>Result: {appState}</p>
            <button onClick={handleClear}>Clear All</button>

            <hr />
            <GrandChild {...props} />
        </div>
    )
}
