import React from 'react';
import Body from '../../layout/Body';

export default class Writing extends React.Component {
    

    render () {
        return (
            <Body
                TabLeft = {() => <h1>Tab left</h1>}
                BodyContent = {() => <h1>Writing</h1>}
                TabRight = {() => <h1>Tab right</h1>}
            />
        )
    }
    
}