import React from 'react';
import Body from '../../layout/Body';

import { useRouteError } from 'react-router-dom';


export default function ErrorPage () {
    
    const error = useRouteError();
    console.log(error);


        return (
            <Body
                TabLeft = {() => <div className="pagenotfound__tableft w-3/12  " >
                                <div className="pagenotfound__tableft__content w-3/12">

                                </div>
                            </div>
                }
                BodyContent = {() => <div>
                    <h1 className="mt-20">🤨 Đi lông nhông đâu dị chời 🤨</h1>

                </div>}
                TabRight = {() => <h1></h1>}
            />
        )
    
}