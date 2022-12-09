import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { getAllByParentId } from "../../apis/region"

export const User = () => {
  const navigate = useNavigate()

  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

  const [country, setCountry] = useState({})
  const [state, setState] = useState({})
  const [city, setCity] = useState({})

  const [showStates, setShowStates] = useState(false)
  const [showCities, setShowCities] = useState(false)

  useEffect(() => {
    getAllByParentId(1)
      .then(res => setCountries(res.data.getAllByParentId))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (country.id) {
      console.log("country: ", country)
      getStates(country.id)
    }
  }, [country])

  const goBack = () => navigate(-1)

  //  to get countries if state not rendered
  const reload = async () => await getAllByParentId(1)
    .then(res => setCountries(res.data.getAllByParentId))
    .catch(err => console.log(err))

  const getStates = async (country_id) => await getAllByParentId(country_id)
    .then(res => setStates(res.data.getAllByParentId))
    .catch(err => console.log(err))

  //  to get cities of the selected state
  const getCities = async (state_id) => await getAllByParentId(state_id)
    .then(res => setCities(res.data.getAllByParentId))
    .catch(err => console.log(err))

  return (
    <div>
      <button className="mng-location" onClick={goBack}>Manage Location</button>

      <button onClick={reload}>Reload</button>

      {countries.map(country =>
        <div key={country.id}>
          <h1 onClick={setCountry(country)}>{country.region}</h1>

        </div>)}

      {states.map(state =>
        <div key={state.id}>
          <input type={"checkbox"} id={state.region} name={state.region} value={state.region} />
          <label htmlFor={state.region}>{state.region}</label>
        </div>
      )}
    </div>
  )

}