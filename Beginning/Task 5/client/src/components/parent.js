import { useEffect, useRef, useState } from 'react'

import { Child } from "./child"

export const Parent = () => {
    const [result, setResult] = useState('')
    const inputRef = useRef()
    const [objectData] = useState({
        name: 'Mohammed Moataz',
        email: 'imohammedmoataz@gmail.com'
    })
    const [arrayData] = useState([
        { id: 1, course: 'React.JS', trainer: 'Amjad' },
        { id: 2, course: 'Node.JS', trainer: 'Heba' }
    ])

    //  Mounted -> Render
    useEffect(() => {
        console.log('Parent - Mounted')

        return () => console.log('Parent - Unmounted')
    }, [])

    const handleChange = (event) => {
        setResult(event.target.value)
    }

    const handleClearAll = () => {
        inputRef.current.value = ''
        setResult('')
    }

    return (
        <div className="parent">
            <h2>Parent Component</h2>

            <input type={'text'} placeholder='Name' ref={inputRef} onChange={handleChange} />

            <hr />
            <Child result={result} objectData={objectData} arrayData={arrayData} handleClear={handleClearAll} />
        </div>
    )
}
