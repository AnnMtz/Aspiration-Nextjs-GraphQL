import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.nav`
    margin-top: 24px;
    width: 8rem;
    display: flex;
    justify-content: space-evenly;
    color: rebeccapurple;
    font-size: 22px;
`;

const LinkStyle = styled.a`
    margin-right: 20px;
    &hover {
        cursor: pointer;
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