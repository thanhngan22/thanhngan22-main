import React from 'react';
import Body from '../../layout/Body';

import { useRouteError } from 'react-router-dom';


export default function ErrorPage () {
    
    const error = useRouteError();
    console.log(error);


        return (
            <div>
                error page
            </div>
        )
    
}