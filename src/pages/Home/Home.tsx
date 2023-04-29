import React from 'react';
import Body from '../../layout/Body';

import instance from '../../services/axios';
// import moonImg from '../../assets/img/moon.jpg';

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
                TabLeft = {() => <h1></h1>}
                BodyContent = {() => {
                    return (
                        <div className='mt-40'>



                        </div>
                    )
                }}
                TabRight = {() => <h1></h1>}
            />
        )
    }
    
}