import React from "react"
import { useNavigate } from "react-router-dom"
import { useQuery, gql } from "@apollo/client"

export const User = () => {
    const navigate = useNavigate()

    const countries = gql`{
        getAllCountries{
          id
          country_name
          country_code
        }
      }`

    const cities = gql`{
        getCitiesOfState(country_code: "eg", state_code: "GZ") {
          state_name
          state_code
        }
      }`

    const states = gql`{
        getStatesOfCountry(country_code: "AF") {
          state_name
          selected
        }
      }`


    const { data, loading, error } = useQuery(countries)

    const goManageLocation = () => navigate(-1)

    if (loading) return "Loading..."
    if (error) console.log(error.message)

    return (
        <div>
            <button className="mng-location" onClick={goManageLocation}>Manage Location</button>

            <div className="mt-5">
                {data.getAllCountries.map(location =>
                    <ul key={location.id}>
                        <li>{location.country_name}</li>
                    </ul>
                )}
            </div>
        </div>
    )
}