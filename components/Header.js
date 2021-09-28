import React from 'react';
import Nav from '../features/Nav';
import styled from 'styled-components';

const HeaderStyle = styled.div`
    background-color: lightgrey
    // padding-bottom: 4rem;
`;

const DivStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0rem 4rem 4rem 4rem;
`;

function Header() {
    return ( 
        <HeaderStyle>
            <DivStyle>
                <h1>GITHUB GRAPHQL</h1>
                <Nav />
            </DivStyle>
        </HeaderStyle>
     );
}
 
export default Header;