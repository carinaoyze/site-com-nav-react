import React from 'react';
import Menu from '../../components/Menu';
import { Helmet } from 'react-helmet-async';


export default function Sobre() {
    return (
        <div>
            <Helmet>
                <title>Saiba mais sobre a empresa!</title>
            </Helmet>
            <h1>Página de sobre</h1>
            <Menu />
        </div>
    )
}
