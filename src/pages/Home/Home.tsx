import React from 'react';
import Body from '../../layout/Body';

import instance from '../../services/axios';
// import moonImg from '../../assets/img/moon.jpg';

export default class Home extends React.Component {
    

    render () {
        return (
           <div className="body__home ">
            <canvas id="star-canvas"></canvas>
           </div>
        )
    }
    
}