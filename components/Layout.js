import React from 'react';
import Header from './Header';
import Table from './Table';

const Layout = (props) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
        </>
     );
}
 
export default Layout;