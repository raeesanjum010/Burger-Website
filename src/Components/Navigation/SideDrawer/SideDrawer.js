import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/backDrop';
import Aux from '../../../hoc/Aux';


const sideDrawer = (props) => {

    let attachedClasses=[classes.SideDrawer, classes.Close];
    if (props.Open){
        attachedClasses=[classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <BackDrop show={props.Open}  clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;