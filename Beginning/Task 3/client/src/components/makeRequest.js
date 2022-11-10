import React, { useState, useRef } from 'react'

export const MakeRequest = () => {
    const [url, setUrl] = useState('')
    const [request, setRequest] = useState('')
    const resultRef = useRef()

    const exampleRequest =
        `An example GraphQL query might look like:
    {
        field(arg: "value") {
           subField
        }
    }`

    const handleSubmit = async () => {
        resultRef.current.value = ''
        await handleRequest()
    }

    const handleRequest = async () => {
        await fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: request })
        }).then(response => {
            if (response.status !== 200 || response.status !== 201)
                resultRef.current.value = "Failed to request the server"

            return response.json()
        })
            .then(jsonResponse => {
                resultRef.current.value = JSON.stringify(jsonResponse)
                    .replaceAll(',', ', ')
                    .replaceAll('},', '},\n')
                    .replaceAll(':{', ':{\n')
                    .replaceAll('[', '[\n ')
                    .replaceAll('}}', '\n}}')
                    console.log(jsonResponse.data)
            })
            .catch(err => resultRef.current.value = err)
    }

    const handleClear = () => {
        resultRef.current.value = ''
    }

    return (
        <div>
            <textarea className='url' placeholder='URL...' onChange={event => setUrl(event.target.value)} />
            <textarea className='request' placeholder={exampleRequest} onChange={event => setRequest(event.target.value)} />
            <button className='button' onClick={handleSubmit}>Submit</button>

            <hr />
            <textarea className='result' placeholder='Result' ref={resultRef} />
            <button className='button' onClick={handleClear}>Clear</button>
        </div>
    )
}
