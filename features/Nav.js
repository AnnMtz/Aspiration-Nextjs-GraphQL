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
    text-decoration: none;
`;

function Nav() {
    return ( 
        <NavStyles>
            <Link href="/"><LinkStyle>Home</LinkStyle></Link>
            <Link href="/main"><LinkStyle>Topics</LinkStyle></Link>
        </NavStyles>
     );
}
 
export default Nav;