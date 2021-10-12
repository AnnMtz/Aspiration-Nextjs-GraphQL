import { QUERY } from "./schema";
import { BaseURL, token } from "../api/config";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
const httpLink = createHttpLink({
  uri: BaseURL,
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
});

export const client = new ApolloClient({
  /*uri: BaseURL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `bearer ${token}`,
  },*/
  link: httpLink,
  cache: new InMemoryCache(),
});
console.log("getInfo", token);
