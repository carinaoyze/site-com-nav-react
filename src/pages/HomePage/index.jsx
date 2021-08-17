import React from 'react';
import Menu from '../../components/Menu';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
    return (
        <div>
            <Helmet>
                <title>Bem-vindO(a) a Homepage</title>
            </Helmet>
            <h1>Home Page</h1>
            <Menu />
        </div>
    )
}
