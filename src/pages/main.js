import Layout from '../components/commons/Layout';
import styled from '@emotion/styled'
import { client } from '../config/getInfo';
import { ApolloProvider } from '@apollo/client';
import Table from '../components/commons/Table';

function Main() {
  return(
    <ApolloProvider client={client}>
        <Layout>
        </Layout>
        <Table />
    </ApolloProvider>
  )
}

export default Main;
