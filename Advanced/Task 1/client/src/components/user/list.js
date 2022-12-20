import React, { useContext, useEffect } from "react"

import { AppContext } from "../../contextapi/context/AppContext"
import * as AppActionType from "../../contextapi/action/AppAction"

export const List = props => {
    const { parentNode } = props

    const { appState, appDispatch } = useContext(AppContext)

    useEffect(() => {
        if (appState.regions.root)
            console.log(appState.regions.root.children)
    }, [appState])

    const handleChange = (e, region) => {
        if (region.isLeaf())
            appDispatch({
                type: AppActionType.UPDATE_CITY,
                payload: {
                    region,
                    statue: e.target.checked ? "full" : "empty"
                }
            })

        else if (region.parent.key === 1)
            appDispatch({

            })

        else
            appDispatch({

            })
    }

    return (
        <ul>
            {parentNode
                ? parentNode.children
                    .sort((a, b) => a.value > b.value ? 1 : -1)
                    .map(region =>
                        <li className="bg-secondary-40 text-light region-control border" key={region.key}>
                            <details>
                                <summary>
                                    <label className="form-control">
                                        <input
                                            type="checkbox"
                                            value={`${region.value.statue}`}
                                            defaultChecked={true}
                                            onChange={e => {
                                                let newRegion = appState.regions
                                                    .find(region.key).value = {
                                                    name: region.value.name,
                                                    checked: e.target.checked,
                                                    statue: "full" ? "empty" : "full"
                                                }

                                                appDispatch({
                                                    type: AppActionType.UPDATE_CITY,
                                                    payload: {
                                                        ...appState,
                                                        newRegion
                                                    }
                                                })
                                            }}
                                        />
                                        {region.value.name}
                                    </label>
                                </summary>
                                <List parentNode={region} />
                            </details>
                        </li>
                    )
                : null
            }
        </ul>
    )
}