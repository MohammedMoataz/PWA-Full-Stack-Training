import React, { useContext } from "react"

import { getAllByParentId } from "../../../apis/region"
import * as appActions from "../../../contextapi/action/AppAction"
import { AppContext } from "../../../contextapi/context/AppContext"
import { CityList } from "./cityList"

export const StateList = () => {
    const { appState, appDispatch } = useContext(AppContext)

    //  get cities of the selected state
    const getCities = async state_id => await getAllByParentId(state_id)
        .then(res => appDispatch({
            type: appActions.GET_CITIES,
            payload: res.data.getAllByParentId
        }))
        .catch(err => console.error(err))

    //  get list of cities of the selected state and close other lists if open
    const handleOpenCities = state => {
        getCities(state.id)

        Array
            .from(document.getElementsByClassName('states'))
            .map(element => element.open = false)
    }

    const handleCountryCompletion = (e, state) => {
        let country = appState.countries.find(country => country.id === state.p_id)

        e.target.checked
            ? country.length++
            : country.length--

        if (country.length === 0)
            country.statue = 'full'

        else if (country.length === appState.states.length * -1)
            country.statue = 'empty'

        else
            country.statue = 'not empty'

        console.table(appState.countries)
    }

    return (
        <ul>
            {appState.states.map(state =>
                <li className="bg-secondary-70 state-control border" key={state.id}>
                    <details className="states">
                        <summary onClick={() => handleOpenCities(state)}>
                            <label className="form-control" onClick={e => handleCountryCompletion(e, state)}>
                                <input type="checkbox" value={`${state.statue}`} defaultChecked={"checked"} />
                                {state.region}
                            </label>
                        </summary>
                        <CityList />
                    </details>
                </li>
            )}
        </ul>
    )
}