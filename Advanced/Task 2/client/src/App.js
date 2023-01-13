import { useContext } from 'react'

import { Frame } from './components/frame/Frame'
import { PopUp } from './components/pop-up/pop-up'
import { AppContext } from './contextapi/context/AppContext'

import './App.css'

export const App = () => {
    // eslint-disable-next-line no-unused-vars
    const { appState, appDispatch } = useContext(AppContext)

    return <div className="App">
        <Frame />
        {appState.options.length === 0 ? <PopUp /> : null}
    </div>
}