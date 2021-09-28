import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.nav`
    margin-top: 18px;
    width: 8rem;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
`;

const LinkStyle = styled.a`
    &hover {
        cursor: pointer
    }
`;

function Nav() {
    return ( 
        <NavStyles>
            <LinkStyle><Link href="/">Home</Link></LinkStyle>
            <LinkStyle><Link href="/main">Topics</Link></LinkStyle>
        </NavStyles>
     );
}
 
export default Nav;