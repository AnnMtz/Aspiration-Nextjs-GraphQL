import Layout from '../components/Layout'
import styled from '@emotion/styled'
import { client } from './api/getInfo';
import { ApolloProvider } from '@apollo/client';
import Logo from '../images/react.png';

function Home() {
  return(
    <ApolloProvider client={client}>
        <Layout>
        <div>
      <blockquote>
      Here you can view all the topics related to React, just click on the menu TOPICS at the header
    </blockquote>
      <img src="/react.png" alt="react image" css={`width: 50%;`}/>
    </div>
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
