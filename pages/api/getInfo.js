// import axios from "axios";
import { QUERY } from "./schema";
import { graphqlAPI, token } from "./config";
import {
    ApolloClient,
    InMemoryCache
} from '@apollo/client';

// export const getInfo = async () => {
//     const result = await axios.post(
//         graphqlAPI,
//         { query: query },
//         { headers: oauth }
//     )
//     return result.data;
// }

export const client = new ApolloClient({
    uri: graphqlAPI,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `bearer ${token}`
    }
});
console.log(token);
console.log(graphqlAPI);