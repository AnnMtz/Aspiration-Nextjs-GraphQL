import { QUERY } from "./schema";
import { graphqlAPI, token } from "./config";
import {
    ApolloClient,
    InMemoryCache
} from '@apollo/client';

export const client = new ApolloClient({
    uri: graphqlAPI,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `bearer ${token}`
    }
});
