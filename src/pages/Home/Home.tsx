import React from 'react';
import Body from '../../layout/Body';

import instance from '../../services/axios';

export default class Home extends React.Component {
    handleData = () => {
        instance.get('/api/users')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
    });
    }

    render () {
        return (
            <Body
                TabLeft = {() => <h1>Tab left</h1>}
                BodyContent = {() => {
                    return (
                        <div>
                            <h1 className="mt-20">Home </h1>
                            <button onClick={this.handleData}>Get data</button>
                        </div>
                    )
                }}
                TabRight = {() => <h1>Tab right</h1>}
            />
        )
    }
    
}