import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './Footer.css';

export default function Footer(){
    let styles = {
        buttonWhite: {
            color: 'white',
            border: '1px solid white',
            margin: '25px',
            fontFamily: 'Noto Sans HK, sans-serif'
        }
    }
    return(
        <div className='footerWrapper'>
            <div className='footerText'>
                <p>Add bio.</p>
                <p>Add more bio..</p>
                <p>Add more bio if available...</p>
                <Link to='/contact'>
                    <Button style={styles.buttonWhite} variant='outlined' size='large'>Let's make it happen</Button>
                </Link>
            </div>
        </div>
    )
}