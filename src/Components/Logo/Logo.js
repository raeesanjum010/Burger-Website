import React from 'react';
import Burgerlog from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} >
        <img src={Burgerlog} alt="my/burger Logo" />
    </div>
);

export default logo;