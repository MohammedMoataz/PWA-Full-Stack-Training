import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { getAllByParentId } from "../../apis/region"
import { Panel } from "./panel"

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
        getAllByParentId(1)
            .then(res => setCountries(res.data.getAllByParentId))
            .catch(err => console.log(err))
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
    const reload = async () => await getAllByParentId(1)
        .then(res => setCountries(res.data.getAllByParentId))
        .catch(err => console.log(err))

    //  to get states of the selected country
    const getStates = async (country_id) => await getAllByParentId(country_id)
        .then(res => setStates(res.data.getAllByParentId))
        .catch(err => console.log(err))

    //  to get cities of the selected state
    const getCities = async (state_id) => await getAllByParentId(state_id)
        .then(res => setCities(res.data.getAllByParentId))
        .catch(err => console.log(err))

    const addCountry = () => setPanel(<Panel region={{ parent_id: 1 }} placeholder={"Country Name"} value={null} action={"add"} />)

    const updateCountry = () => setPanel(<Panel region={{ id: country.id }} placeholder={"Country Name"} value={country.name} action={"update"} />)

    const addState = () => setPanel(<Panel region={{ parent_id: country.id }} placeholder={"State Name"} value={null} action={"add"} />)

    const updateState = () => setPanel(<Panel region={{ id: state.id }} placeholder={"State Name"} value={state.name} action={"update"} />)

    const addCity = () => setPanel(<Panel region={{ parent_id: state.id }} placeholder={"City Name"} value={city.name} action={"add"} />)

    const updateCity = () => setPanel(<Panel region={{ id: city.id }} placeholder={"City Name"} value={city.name} action={"update"} />)

    return (
        <div className="container">
            <button onClick={reload}>Reload</button>

            <button type="button" onClick={addCountry}>add Country</button>

            <form className="region-form" >
                <select onChange={e => {
                    setCountry({
                        id: e.target.options[e.target.options.selectedIndex].getAttribute("accessKey"),
                        name: e.currentTarget.value
                    })
                    setShowCity(false)
                }}>
                    <option>Select Country</option>
                    {countries.map(country => <option accessKey={country.id} key={country.id}>{country.region}</option>)}
                </select>
                <button type="button" onClick={addState}>add</button>
                <button type="button" onClick={updateCountry}>update</button>
            </form>

            {showState
                ? <form className="region-form" >
                    <select onChange={e => {
                        setState({
                            id: e.target.options[e.target.options.selectedIndex].getAttribute("accessKey"),
                            name: e.currentTarget.value
                        })
                        setShowCity(true)
                    }}>
                        <option>Select State</option>
                        {states.map(state => <option accessKey={state.id} key={state.id}>{state.region}</option>)}
                    </select>
                    <button type="button" onClick={addCity}>add</button>
                    <button type="button" onClick={updateState}>update</button>
                </form>
                : null
            }

            {showCity
                ? <form className="region-form" >
                    <select onChange={e => setCity({
                        id: e.target.options[e.target.options.selectedIndex].getAttribute("accessKey"),
                        name: e.currentTarget.value
                    })}>
                        <option>Select City</option>
                        {cities.map(city => <option accessKey={city.id} key={city.id}>{city.region}</option>)}
                    </select>
                    <button type="button" onClick={updateCity}>update</button>
                </form>
                : null
            }

            <button onClick={goToRegions}>Go to Regions</button>
            {panel}
        </div>
    )
}