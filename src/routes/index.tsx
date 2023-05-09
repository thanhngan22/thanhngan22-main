import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import homeRoutes from './home';
import blogRoutes from './blog';
import docsRoutes from './docs';
import writingRoutes from './writing';
import collectionsRoutes from './collections';

import Layout from '../layout';
import ErrorPage from '../pages/ErrorPage';

import Login from 'auth/Login';
import SignUp from 'auth/SignUp';
import DashBoard from 'pages/Dashboard/dashboard';

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            homeRoutes,
            blogRoutes,
            docsRoutes,
            writingRoutes,
            collectionsRoutes,
            {
                path: '*',
                element: <ErrorPage/>
            },
        ]
    },
    {
        path: 'login/',
        element: <Login />
    },
    {
        path: 'register/',
        element: <SignUp />
    },
    {
        path: '/dashboard',
        element: <DashBoard/>
    }
]);

export default router;