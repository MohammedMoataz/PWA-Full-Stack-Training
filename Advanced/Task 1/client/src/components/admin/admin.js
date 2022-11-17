import { useQuery, gql } from "@apollo/client"
import React, { useState } from "react"

export const Admin = () => {
    const [country, setCountry] = useState({})
    const [countries, setCountries] = useState([])

    const getCountriesQuery = gql`{
        getRegions
      }`
    let { data, loading, error } = useQuery(getCountriesQuery)

    if (loading) return "Loading..."
    if (error) console.log(error.message)

    const handleSubmit = async e => {
        e.preventDefault()

        const addCountryMutation = `mutation {
            addRegion(regionInput: {region: "${country}"}) {
              id
              p_id
              region
            }
          }`

        await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: addCountryMutation })
        }).then(response => response.json())
            .catch(err => console.log(err))
    }

    const handleCountryChange = e => setCountry(e.target.value)

    const showCountries = () => setCountries(data.getRegions)

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    name="country"
                    id="country"
                    placeholder="Add country name"
                    onChange={handleCountryChange} />

                <button>Add Country</button>
            </form>

            <button onClick={showCountries}>Show Countries</button>
            <div className="countries">
                {countries.map(country =>
                    <button key={country}>{country}</button>
                )}
            </div>
        </div>
    )
}