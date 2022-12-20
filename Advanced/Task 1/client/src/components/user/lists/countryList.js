import React, { useContext } from "react"

import { getAllByParentId } from "../../../apis/region"
import * as appActions from "../../../contextapi/action/AppAction"
import { AppContext } from "../../../contextapi/context/AppContext"
import { StateList } from "./stateList"

export const CountryList = () => {
    const { appState, appDispatch } = useContext(AppContext)

    //  get states of the selected country
    const getStates = async country_id => await getAllByParentId(country_id)
        .then(res => {
            appDispatch({
                type: appActions.GET_STATES,
                payload: res.data.getAllByParentId.map(state => {
                    state.statue = "full"
                    state.length = 0
                    return state
                })
            })
        })
        .catch(err => console.error(err))

    //  get list of states of the selected country and close other lists if open
    const handleOpenStates = country => {
        getStates(country.id)

        Array
            .from(document.getElementsByClassName('countries'))
            .map(element => element.open = false)
    }

    return (
        <ul className="tree text-light">
            {appState.countries.map(country =>
                <li className="bg-secondary-40 country-control border" key={country.id}>
                    <details className="countries">
                        <summary onClick={() => handleOpenStates(country)}>
                            <label className="form-control">
                                <input type="checkbox" value={`${country.statue}`} defaultChecked={"checked"} />
                                {country.region}
                            </label>
                        </summary>
                        <StateList />
                    </details>
                </li>
            )}
        </ul>
    )
}