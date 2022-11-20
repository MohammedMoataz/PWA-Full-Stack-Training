import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

import { Main } from './components/main/main'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </React.StrictMode>
  )
}

export default App
