import React from 'react';
import Nav from '../features/Nav';
import styled from 'styled-components';

const HeaderStyle = styled.div`
    background-color: #9ab3e1c2;
    padding-bottom: 26px;
    margin-bottom: 5rem;
`;

const DivStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0rem 4rem 4rem 4rem;
`;

const H1Styles = styled.h1`
    margin-top: 50px;
    color: rebeccapurple;
`;

function Header() {
    return ( 
        <HeaderStyle>
            <DivStyle>
                <H1Styles>GITHUB GRAPHQL</H1Styles>
                <Nav />
            </DivStyle>
        </HeaderStyle>
     );
}
 
export default Header;