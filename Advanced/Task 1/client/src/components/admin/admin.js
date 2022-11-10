import React, { useEffect, useState } from "react"
import { Country, State, City } from 'country-state-city'
import { useNavigate } from "react-router-dom"

export const Admin = () => {
    const [country, setCountry] = useState({})
    const [state, setState] = useState({})
    const [city, setCity] = useState({})

    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (country !== undefined)
            setStates(<datalist id="states">
                {State
                    .getStatesOfCountry(country.isoCode)
                    .map(state => <option key={state.isoCode}>{state.isoCode}: {state.name}</option>)}
            </datalist>)

        if (country !== undefined && state !== undefined)
            setCities(<datalist id="cities">
                {City
                    .getCitiesOfState(country.isoCode, state.isoCode)
                    .map(city => <option key={city.name}>{city.name}</option>)}
            </datalist>)

        console.log('country: ', country)
        console.log('state: ', state)
        console.log('city: ', city)
    }, [city, country, state])

    const handleSubmit = async e => {
        e.preventDefault()

        const mutation = `mutation{
            addLocation(locationInput: {
              country_name: "${country.name}"
              country_code: "${country.isoCode}"
              state_name: "${state.name}"
              state_code: "${state.isoCode}"
              city_name: "${city.name}"
              selected: true
            }) {
              id
            }
          }`

        await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: mutation })
        }).then(response => {
            if (response.status !== 200 || response.status !== 201)
                navigate('/locations')

            return response.json()
        })
            .then(jsonResponse => console.log(jsonResponse.data.addLocation))
            .catch(err => console.log(err))
    }

    const handleCountryChange = e => setCountry(Country.getCountryByCode(e.target.value.split(':')[0]))

    const handleStateChange = e => setState(State.getStateByCodeAndCountry(e.target.value.split(':')[0], country.isoCode))

    const handleCityChnage = e => setCity(City.getCitiesOfState(country.isoCode, state.isoCode).filter(city => city.name === e.target.value).at(0))

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-5">
                <input
                    list="countries"
                    name="country"
                    id="country"
                    onChange={handleCountryChange}
                ></input>
                <datalist id="countries">
                    {Country
                        .getAllCountries()
                        .map(country => <option key={country.isoCode}>{country.isoCode}: {country.name}</option>)}
                </datalist>

                <input
                    list="states"
                    name="state"
                    id="state"
                    onChange={handleStateChange}
                ></input>
                {states}

                <input
                    list="cities"
                    name="city"
                    id="city"
                    onChange={handleCityChnage}
                ></input>
                {cities}

                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}