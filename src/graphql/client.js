import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

// El endpoint /graphql es interceptado por MSW (backend mock).
export const client = new ApolloClient({
  link: new HttpLink({ uri: `${import.meta.env.BASE_URL}graphql` }),
  cache: new InMemoryCache(),
})
