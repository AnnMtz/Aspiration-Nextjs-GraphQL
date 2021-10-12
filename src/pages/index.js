import Layout from '../components/commons/Layout';
import styled from '@emotion/styled'
import { client } from '../config/getInfo';
import { ApolloProvider } from '@apollo/client';
import Logo from '../../images/react.png';
import Image from 'next/image'

const ImageStyles = styled.div`
  width: 43%;
  margin: 5rem auto;
`;

const BlockquoteStyles = styled.blockquote`
    font-size: 30px;
    text-align: center;
    font-weight: 800;
`;

const Body = styled.body`
  margin: 0 !important;
`;

function Home() {
  return(
    <Body>
        <ApolloProvider client={client}>
            <Layout>
        <div>
          <BlockquoteStyles>
              Here you can view all the topics related to React, just click on the menu TOPICS at the header
          </BlockquoteStyles>
            <ImageStyles>
              <Image src={Logo} alt="react image"/>
            </ImageStyles>
        </div>
            </Layout>
        </ApolloProvider>
    </Body>
  )
}

export default Home;
