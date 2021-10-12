import { QUERY } from "./schema";
import { BaseURL, token } from "../api/config";
import {
    ApolloClient,
    InMemoryCache
} from '@apollo/client';

export const client = new ApolloClient({
    uri: BaseURL,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `bearer ${token}`
    }
});
console.log(token);