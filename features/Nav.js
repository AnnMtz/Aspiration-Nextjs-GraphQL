import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return ( 
        <nav>
            <Link href="/">Inicio</Link>
            <Link href="/main">Main</Link>
        </nav>
     );
}
 
export default Nav;