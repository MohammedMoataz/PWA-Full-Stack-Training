/* eslint-disable jsx-a11y/no-access-key */
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { getAllByParentId } from "../../apis/region"
import { Panel } from "./panel"
import "./admin.css"

export const Admin = () => {
    const navigate = useNavigate()

    const [country, setCountry] = useState({})
    const [state, setState] = useState({})
    const [city, setCity] = useState({})

    const [countries, setCountries] = useState([])
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    const [panel, setPanel] = useState(<></>)
    const [showState, setShowState] = useState(false)
    const [showCity, setShowCity] = useState(false)

    useEffect(() => {
        getCountries()
    }, [])

    useEffect(() => {
        if (country.id) {
            getStates(country.id)
            setShowState(true)
        }
        if (state.id) {
            getCities(state.id)
        }
    }, [country, state])

    const goToRegions = () => navigate('/regions')

    //  to get countries if state not rendered
    const reload = async () => {
        getCountries()
        setShowState(false)
        setShowCity(false)
    }

    //  get all countries
    const getCountries = async () => await getAllByParentId(1)
        .then(res => setCountries(res.data.getAllByParentId))
        .catch(err => console.error(err))

    //  get states of the selected country
    const getStates = async (country_id) => await getAllByParentId(country_id)
        .then(res => setStates(res.data.getAllByParentId))
        .catch(err => console.error(err))

    //  get cities of the selected state
    const getCities = async (state_id) => await getAllByParentId(state_id)
        .then(res => setCities(res.data.getAllByParentId))
        .catch(err => console.error(err))

    const addCountry = () => setPanel(<Panel
        region={{ parent_id: 1 }}
        placeholder={"Country Name"}
        value={null}
        action={"Add"}
        closePanel={() => setPanel(<></>)}
    />)

    const updateCountry = () => setPanel(<Panel
        region={{ id: country.id }}
        placeholder={"Country Name"}
        value={country.name}
        action={"Update"}
        closePanel={() => setPanel(<></>)}
    />)

    const addState = () => setPanel(<Panel
        region={{ parent_id: country.id }}
        placeholder={"State Name"}
        value={null}
        action={"Add"}
        closePanel={() => setPanel(<></>)}
    />)

    const updateState = () => setPanel(<Panel
        region={{ id: state.id }}
        placeholder={"State Name"}
        value={state.name}
        action={"Update"}
        closePanel={() => setPanel(<></>)}
    />)

    const addCity = () => setPanel(<Panel
        region={{ parent_id: state.id }}
        placeholder={"City Name"}
        value={null}
        action={"Add"}
        closePanel={() => setPanel(<></>)}
    />)

    const updateCity = () => setPanel(<Panel
        region={{ id: city.id }}
        placeholder={"City Name"}
        value={city.name}
        action={"Update"}
        closePanel={() => setPanel(<></>)}
    />)

    return (
        <div className="container">
            <div className="top-btn">
                <button className="bg-dark text-light" onClick={reload}>Reload</button>
                <button className="bg-dark text-light" onClick={goToRegions}>Go to Regions</button>
            </div>

            <div className="add-country">
                <button
                    className="bg-light text-dark"
                    type="button"
                    onClick={addCountry}
                >
                    add Country
                </button>
            </div>

            <form className="region-form" >
                <select
                    className="bg-light text-dark"
                    onChange={e => {
                        setCountry({
                            id: e.target.options[e.target.options.selectedIndex]
                                .getAttribute("accessKey"),
                            name: e.currentTarget.value
                        })
                        setShowCity(false)
                    }}>
                    <option>Select Country</option>
                    {countries.map(country =>
                        <option
                            accessKey={country.id}
                            key={country.id}
                        >
                            {country.region}
                        </option>
                    )}
                </select>
                {country.id
                    ? <div className="action-btns">
                        <button
                            className="bg-light text-secondaey"
                            type="button"
                            onClick={addState}
                        >
                            add
                        </button>
                        <button
                            className="bg-light text-secondaey"
                            type="button"
                            onClick={updateCountry}
                        >
                            update
                        </button>
                    </div>
                    : null
                }
            </form>

            {showState
                ? <form className="region-form" >
                    <select
                        className="bg-light text-dark"
                        onChange={e => {
                            setState({
                                id: e.target.options[e.target.options.selectedIndex]
                                    .getAttribute("accessKey"),
                                name: e.currentTarget.value
                            })
                            setShowCity(true)
                        }}>
                        <option>Select State</option>
                        {states.map(state =>
                            <option
                                accessKey={state.id}
                                key={state.id}
                            >
                                {state.region}
                            </option>
                        )}
                    </select>
                    {state.id
                        ? <div className="action-btns">
                            <button
                                className="bg-light text-secondaey"
                                type="button"
                                onClick={addCity}
                            >
                                add
                            </button>
                            <button
                                className="bg-light text-secondaey"
                                type="button"
                                onClick={updateState}
                            >
                                update
                            </button>
                        </div>
                        : null
                    }
                </form>
                : null
            }

            {showCity
                ? <form className="region-form" >
                    <select
                        className="bg-light text-dark"
                        onChange={e => setCity({
                            id: e.target.options[e.target.options.selectedIndex]
                                .getAttribute("accessKey"),
                            name: e.currentTarget.value
                        })}>
                        <option>Select City</option>
                        {cities.map(city =>
                            <option
                                accessKey={city.id}
                                key={city.id}
                            >
                                {city.region}
                            </option>
                        )}
                    </select>
                    {city.id
                        ? <div className="action-btns">
                            <button
                                className="bg-light text-secondaey"
                                type="button"
                                onClick={updateCity}
                            >
                                update
                            </button>
                        </div>
                        : null}
                </form>
                : null
            }

            {panel}
        </div>
    )
}