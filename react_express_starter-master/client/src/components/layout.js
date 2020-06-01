import React from 'react';
import Aux from './aux';
import NavigationBar from './navigationBar';

export const Layout = (props) => (
    <Aux>
        <NavigationBar/>
        <main>
            {props.children}
        </main>
    </Aux>
);
