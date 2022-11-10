import { useContext, useRef, useState } from 'react'

import { Child } from "./child"
import * as AppActionType from '../contextapi/actions/AppAction'
import { AppContext } from '../contextapi/contexts/AppContext'

export const Parent = () => {
    const { appState, appDispatch } = useContext(AppContext)

    const inputRef = useRef()
    const [objectData] = useState({
        name: 'Mohammed Moataz',
        email: 'imohammedmoataz@gmail.com'
    })
    const [arrayData] = useState([
        { id: 1, course: 'React.JS', trainer: 'Amjad' },
        { id: 2, course: 'Node.JS', trainer: 'Heba' }
    ])

    const handleChange = (event) => {
        appDispatch({
            type: AppActionType.CHANGE_SEARCH_RESULT,
            payload: inputRef.current.value
        })
    }

    return (
        <div className="parent">
            <h2>Parent Component</h2>

            <input type={'text'} placeholder='Name' ref={inputRef} onChange={handleChange} />

            <hr />
            <AppContext.Provider value={appState}>
                <Child objectData={objectData} arrayData={arrayData} />
            </AppContext.Provider>
        </div>
    )
}
