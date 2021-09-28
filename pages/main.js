import Layout from '../components/Layout'
import styled from '@emotion/styled'
import { client } from './api/getInfo';
import { ApolloProvider } from '@apollo/client';
import Table from '../components/Table';

function Home() {
  return(
    <ApolloProvider client={client}>
        <Layout>
        </Layout>
        <Table />
    </ApolloProvider>
  )
}

export default Home;
