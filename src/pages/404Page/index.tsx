import React from 'react';
import Body from '../../layout/Body';

export default class PageNotFound extends React.Component {
    

    render () {
        return (
            <Body
                TabLeft = {() => <h1></h1>}
                BodyContent = {() => <h1 className="mt-20">🤨 Đi lông nhông đâu dị chời 🤨</h1>}
                TabRight = {() => <h1></h1>}
            />
        )
    }
    
}