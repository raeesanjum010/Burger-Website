import React, { Component } from 'react';
import classes from './BurgerIngrediants.css';
import PropTypes from 'prop-types';


class BurgerIngrediants extends Component{
    render(){
        let ingrediants = null;

        switch (this.props.type)
        {
            case ("bread-bottom"):
                ingrediants = <div className= {classes.BreadBottom}></div>;
                break;
            case ("bread-top"):
                ingrediants = <div className={classes.BreadTop} >
                        <div className={classes.Seeds1} ></div>
                        <div className={classes.Seeds2} ></div>
                </div>;
                break;
            case ("seeds1"):
                    ingrediants = <div className= {classes.Seeds1}></div>;
                    break;
            case ("seeds2"):
                    ingrediants = <div className={classes.Seeds2} ></div>;
                    break;
            case ("cheese"):
                    ingrediants = <div className= {classes.Cheese}></div>;
                    break;
            case ("salad"):
                    ingrediants = <div className={classes.Salad} ></div>;
                    break;
            case ("meat"):
                    ingrediants = <div className={classes.Meat} ></div>;
                    break;
            case ("bacon"):
                    ingrediants = <div className= {classes.Bacon}></div>;
                    break;    
            default:
                    ingrediants = null;
        }
        return ingrediants;
    }

}
BurgerIngrediants.propTypes = {
        type: PropTypes.string.isRequired
};

export default BurgerIngrediants;