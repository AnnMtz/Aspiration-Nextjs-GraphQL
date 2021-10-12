import React from 'react';
import Nav from '../features/Nav';
import styled from 'styled-components';
import TextVariant from '../features/Text';

const HeaderStyle = styled.div`
    background-color: #9ab3e1c2;
    padding-bottom: 26px;
    margin-bottom: 5rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0rem 4rem 4rem 4rem;
`;

function Header() {
    return ( 
        <HeaderStyle>
            <Container>
                <TextVariant />
                <Nav />
            </Container>
        </HeaderStyle>
     );
}
 
export default Header;
