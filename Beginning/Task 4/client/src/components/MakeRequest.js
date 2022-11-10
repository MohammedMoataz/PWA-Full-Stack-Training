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

    const handleFileChange = async (event) => {
        resultRef.current.value = ''
        let userData = {}
        let userFiles = []

        userData = {
            type: 'profileImage',
            length: event.currentTarget.files.length
        }

        Array.from(event.currentTarget.files).forEach(file =>
            userFiles.push(file)
        )

        const formData = new FormData()
        formData.append('userData', JSON.stringify(userData))
        Array.from(userFiles).forEach(file => formData.append('userFiles', file))

        const headers = new Headers()
        headers.append('Accept', 'application/json')
        headers.append('Access-Control-Allow-Origin', '*')

        await fetch('http://localhost:4000/uploadFiles', {
            method: 'POST',
            enctype: 'multipart/form-data',
            headers: headers,
            body: formData

        }).then(response => {
            if (response.status !== 200 || response.status !== 201)
                resultRef.current.value = "Failed to request the server"

            return response.json()
        }).then(jsonResponse => {
            resultRef.current.value = JSON.stringify(jsonResponse)
            .replaceAll('{', '{ ')
            .replaceAll('[', '[\n')
            .replaceAll(':', ': ')
            .replaceAll('{ "b', '\t{\n\t\t"b')
            .replaceAll('},', '\n\t},\n')
            .replaceAll(',"', ',\n\t\t"')
            .replaceAll('}]', '\n\t}\n]')

        }).catch(err => resultRef.current.value = err)
    }

    const handleSubmit = async (e) => {
        resultRef.current.value = ''
        await handleRequest(e)
    }

    const handleRequest = async (e) => {
        e.preventDefault()

        await fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: request })

        }).then(response => {
            if (response.status !== 200 || response.status !== 201)
                resultRef.current.value = "Failed to request the server"

            return response.json()

        }).then(jsonResponse => {
            resultRef.current.value = JSON.stringify(jsonResponse)
                .replaceAll('[', '[\n')
                .replaceAll(':', ': ')
                .replaceAll('},', '\n\t},\n')
                .replaceAll('}]', '\n\t}\n]')
                .replaceAll('{"name', '\t{\n\t\t"name')
                .replaceAll('"type', '\n\t\t"type')
                .replaceAll('"path', '\n\t\t"path')

        }).catch(err => resultRef.current.value = err)
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
            <input className='file-input' type='file' multiple onChange={handleFileChange} />

            <hr />
            <textarea className='result' placeholder='Result' ref={resultRef} />
            <button className='button' onClick={handleClear}>Clear</button>
        </div>
    )
}
