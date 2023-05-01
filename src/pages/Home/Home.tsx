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
           <div>
            page home
           </div>
        )
    }
    
}