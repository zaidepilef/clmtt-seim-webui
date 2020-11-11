import React from 'react';
import Login from '../Paginas/Login'
import Dashboard from '../Paginas/Dashboard'
import PageNotFound from '../Paginas/PageNotFound'
import ErrorPage from '../Paginas/ErrorPage';
import VerificaClaveUnica from '../Paginas/VerificaClaveUnica';

const routes = [
    {
        path: '/',
        component: Dashboard
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/errorpage',
        component: ErrorPage
    },
    {
        path: '/verificaclaveunica',
        component: VerificaClaveUnica
    },
    {
        path: '/*',
        component: PageNotFound
    },
]

export default routes