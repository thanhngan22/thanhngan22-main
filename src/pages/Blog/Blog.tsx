import React from 'react';
import Body from '../../layout/Body';

export default class Blog extends React.Component {
    

    render () {
        return (
            <Body
                TabLeft = {() => <h1>Tab left</h1>}
                BodyContent = {() => <h1>Blog</h1>}
                TabRight = {() => <h1>Tab right</h1>}
            />
        )
    }
    
}