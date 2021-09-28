import React from 'react';
import Header from './Header';
import styled from 'styled-components';


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