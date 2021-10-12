import { QUERY } from "./schema";
import { BaseURL, token } from "../api/config";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
const httpLink = createHttpLink({
  uri: BaseURL,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

