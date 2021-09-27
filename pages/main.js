import Layout from '../components/Layout'
import styled from '@emotion/styled'
import { client } from './api/getInfo';
import { ApolloProvider } from '@apollo/client';

function Home() {
  return(
    <ApolloProvider client={client}>
        <Layout>
          {/* <h1>Inicio</h1> */}
        </Layout>
    </ApolloProvider>
  )
}

export default Home;

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <ApolloProvider></ApolloProvider>
// )
// export default function Home() {
//   return (
//     <div>
//       <Layout>
//         <H1styled>Inicio</H1styled>
//       </Layout>
//     </div>
//   )
// }
