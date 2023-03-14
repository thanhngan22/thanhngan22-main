import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import homeRoutes from './home';
import blogRoutes from './blog';
import docsRoutes from './docs';
import writingRoutes from './writing';
import studyRoutes from './study';

import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter ([
    homeRoutes,
    blogRoutes,
    docsRoutes,
    writingRoutes,
    studyRoutes,
    {
        path: '*',
        element: <ErrorPage/>
    },
]);

export default router;