import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            Copyright &#169; {new Date().getFullYear()} Jeff White. All Rights Reserved.
        </footer>
    );
};

export default Footer