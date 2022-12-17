import React, { useState } from "react"

import { add, update } from "../../apis/region"
import "./panel.css"

export const Panel = props => {
    let { region, placeholder, value, action, closePanel } = props
    const [name, setName] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()

        action === "Add"
            ? await add(name, region.parent_id)
                .then(() => closePanel())
                .catch(err => console.error(err))

            : update(name, region.id)
                .then(() => closePanel())
                .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-secondary pop-up-overlay"></div>
            <div className="pop-up">
                <div className="pop-up-header">
                    <h1 className="text-dark pop-up-title">{action} {placeholder}</h1>
                    <button className="text-dark pop-up-close" onClick={() => closePanel()}>X</button>
                </div>
                <div className="pop-up-content">
                    <input
                        className="text-light bg-primary pop-up-input"
                        onChange={e => setName(e.target.value)}
                        defaultValue={value}
                        placeholder={placeholder}
                    />
                    <button className="text-light bg-secondary pop-up-action">{action}</button>
                </div>
            </div >
        </form >
    )
}