import React, { useState } from "react"

import { add, update } from "../../apis/region"

export const Panel = props => {
    let { region, placeholder, value, action } = props
    const [name, setName] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()

        action === "add"
            ? await add(name, region.parent_id)
                .then(res => console.log(res))
                .catch(err => console.error(err))

            : update(name, region.id)
                .then(res => console.log(res))
                .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={e => setName(e.target.value)}
                defaultValue={value}
                placeholder={placeholder}
            />
            <button>{action}</button>
        </form>
    )
}