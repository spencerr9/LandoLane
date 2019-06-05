import React from 'react';
import Button from '@material-ui/core/Button';
import './Footer.css';

export default function Footer(){
    return(
        <div className='footerWrapper'>
            <div className='footerText'>
                <p>Colby & Jess are a husband and wife destination elopement photographer team. We specialize in photographing adventurous couples in epic locations for weddings, elopements, engagements, anniversaries, honeymoons or just because you're in love.</p>
                <p>We love to travel and while we consider 'home' to be Springfield MO we're usually somewhere on the road living out of our van, Big Burg, traveling to photograph our next adventure elopement.</p>
                <p>Our favorite adventure elopement destinations are Hawaii, Italian Alps, Philippines, Greece, Iceland, and the Western United States (California, Oregon, Washington, Arizona, Utah, Colorado).</p>
                <Button variant='outlined' size='large'>Let's make it happen</Button>
            </div>
        </div>
    )
}