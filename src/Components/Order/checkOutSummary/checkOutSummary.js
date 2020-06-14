import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './checkOutSummary.css';

const checkOutSummary = (props) => {
    return (
        <div className={classes.checkOutSummary}>
            <h1>Hope You Will Enjoy! </h1>
            <div style={{margin: 'auto'}}>
                <Burger ingrediants={props.ingrediants}/>
            </div>
            <div>
                <Button 
                    btnType='Danger'
                    clicked={props.checkOutCancelled}>CANCEL</Button>
                <Button 
                    btnType='Success'
                    clicked={props.checkOutContinue}>CONTINUE</Button>
            </div>        
        </div>
    );
};

export default checkOutSummary;