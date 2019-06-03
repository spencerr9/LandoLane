import React from 'react';
import './Landing.css';

import LandingDivider from '../LandingDivider/LandingDivider'

function Landing(){
    return (
        <div>
            <div className='Landing Photo1'></div>
            <LandingDivider 
                // pictureURL='https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg' 
                title='HELLO' 
                text='lorem Ipsom a;lsdkjalsdjfalsdjkalskdjalsdkj;la' 
                button1Text='click here'
                button2Text='click me'
            />
            <div className='Landing Photo2'></div>
            <div className='Landing Photo3'></div>
        </div>
    )
}

export default Landing 