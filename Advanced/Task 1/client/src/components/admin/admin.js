import { useQuery, gql } from "@apollo/client"
import React, { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"

export const Admin = () => {
    const [country, setCountry] = useState({})
    const [countries, setCountries] = useState([])
    const [added, setAdded] = useState({})

    const getCountriesQuery = gql`{
        getRegions
      }`
    let { data, loading, error } = useQuery(getCountriesQuery)

    // const navigate = useNavigate()

    useEffect(() => {
        added
            ? setCountries(Array.from(countries).p     ush(added))
            : setCountries(data.getRegions)

    }, [])

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
            .then(jsonResponse => setAdded(jsonResponse.data.addRegion.region))
            .catch(err => console.log(err))
    }

    const handleCountryChange = e => setCountry(e.target.value)

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

            <div className="countries">
                {Array.from(countries).map(country =>
                    <button key={country}>{country}</button>
                )}
            </div>
        </div>
    )
}