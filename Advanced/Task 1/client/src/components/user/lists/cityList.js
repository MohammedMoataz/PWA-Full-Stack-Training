import React, { useContext } from "react"

import { AppContext } from "../../../contextapi/context/AppContext"

export const CityList = () => {
    // eslint-disable-next-line no-unused-vars
    const { appState, appDispatch } = useContext(AppContext)

    const handleStateCompletion = (e, city) => {
        let state = appState.states.find(state => state.id === city.p_id)

        e.target.checked
            ? state.length++
            : state.length--

        if (state.length === 0)
            state.statue = 'full'

        else if (state.length === appState.cities.length * -1)
            state.statue = 'empty'

        else
            state.statue = 'not empty'

        console.table(appState.states)
    }

    return (
        <ul>
            {appState.cities.map(city =>
                <li className="bg-secondary city-control border" key={city.id}>
                    <label className="form-control" >
                        <input type="checkbox" value={`full`} defaultChecked={"checked"} onChange={e => handleStateCompletion(e, city)} />
                        {city.region}
                    </label>
                </li>
            )}
        </ul>
    )
}