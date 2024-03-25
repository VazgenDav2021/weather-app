import React, { ReactNode } from 'react';
import { SearchBlock } from '../components';
import "./Layout.scss";

interface ILayout {
    children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <>
            <header className='app_layout'>
                <SearchBlock />
            </header>
            {children}
        </>

    );
};

export default Layout;