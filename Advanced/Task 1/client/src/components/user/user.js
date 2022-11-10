import React from "react"
import { useNavigate } from "react-router-dom"
import { useQuery, gql } from "@apollo/client"

export const User = () => {
    const navigate = useNavigate()

    const query = gql`{
        getAllLocations{
          id
          country_name
          country_code
          state_name
          state_code
          city_name
          selected
        }
      }`

    const { data, loading, error } = useQuery(query)

    const goManageLocation = () => navigate(-1)

    if (loading) return "Loading..."
    if (error) console.log(error.message)

    return (
        <div>
            <button className="mng-location" onClick={goManageLocation}>Manage Location</button>

            <div className="mt-5">
                <ul>
                    {data.getAllLocations.map(location => {
                        return <div key={location.id}>
                            <ul>
                                <li>{location.country_name}</li>
                                <li>{location.state_name}</li>
                                <li>{location.city_name}</li>
                            </ul><br />
                        </div>
                    })}
                </ul>
            </div>
        </div>
    )
}