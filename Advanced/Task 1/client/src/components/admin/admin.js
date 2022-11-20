import { useQuery, gql } from "@apollo/client"
import React, { useEffect, useState } from "react"

export const Admin = () => {
    const [region, setRegion] = useState("")
    const [parentRegion, setParentRegion] = useState("root")
    const [regions, setRegions] = useState([])

    let getRegionsQuery = gql`{
        getRegions(parent_region: "${parentRegion}") {
          id
          p_id
          region
        }
      }`
    let addRegionMutation = `mutation {
        addRegion(regionInput: {
          parent_region: "${parentRegion}"
          region: "${region}"
        }) {
          id
          p_id
          region
        }
      }`

    let { data, refetch } = useQuery(getRegionsQuery)

    useEffect(() => {
        if (data)
            setRegions(data.getRegions)

        console.log(region)
    }, [data, region])

    const handleSubmit = async e => {
        e.preventDefault()

        await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: addRegionMutation })
        })
            .then(response => response.json())
            .then(JsonResponse => console.log(JsonResponse))
            .catch(err => console.log(err))
    }

    const handleRegionChange = e => {
        setParentRegion(e.target.value)
        setRegion(e.target.value)

        console.log("ParentRegion: ", parentRegion)
        console.log("region: ", region)
        refetch().then(res => console.log(res))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    list="regions"
                    name="country"
                    id="country"
                    placeholder="Add Country Name"
                    onChange={handleRegionChange} />
                <datalist id="regions">
                    {regions.map(region => <option key={region.id}>{region.region}</option>)}
                </datalist>
                <button>+</button>
            </form>

            <form onSubmit={handleSubmit} >
                <input
                    list="regions"
                    name="state"
                    id="state"
                    placeholder="Add State Name"
                    onChange={handleRegionChange} />
                <datalist id="regions">
                    {regions.map(region => <option key={region.id}>{region.region}</option>)}
                </datalist>
                <button>+</button>
            </form>

            <form onSubmit={handleSubmit} >
                <input
                    list="regions"
                    name="city"
                    id="city"
                    placeholder="Add City Name"
                    onChange={handleRegionChange} />
                <datalist id="regions">
                    {regions.map(region => <option key={region.id}>{region.region}</option>)}
                </datalist>
                <button>+</button>
            </form>
        </div>
    )
}