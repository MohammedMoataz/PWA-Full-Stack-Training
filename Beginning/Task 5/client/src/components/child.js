import { useEffect } from "react"

import { GrandChild } from "./grandchild"

export const Child = (props) => {

    //  Unmounted
    useEffect(() => {
        console.log('Child - Mounted')

        return () => console.log('Child - Unmounted') //    Clearup function اخر كود بيتم تنفيذه قبل ما ننهي الكومبوننت
    }, [props.result])

    const handleClear = () => {
        props.handleClear()
    }

    return (
        <div className="child">
            <h3>Child Component</h3>

            <p>{props.result}</p>
            <button onClick={handleClear}>Clear All</button>

            <hr />
            <GrandChild {...props} />
        </div>
    )
}
