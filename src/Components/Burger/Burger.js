import React from 'react';
import classes from './Burger.css';
import BurgerIngrediants from './BurgerIngrediant/BurgerIngrediants';

const Burger = (props)=>{

    let transformIngrediants = Object.keys(props.ingrediants).map(ingKey=>{
        return [...Array(props.ingrediants[ingKey])].map((_,i)=>{
            return <BurgerIngrediants key={ingKey+i} type={ingKey}/>
        });
    }).reduce((pvalue,cvalue) =>{
        return pvalue.concat(cvalue)
    },[]);
    if(transformIngrediants.length === 0){
        transformIngrediants=<p>please add the ingrediants</p>
    }

    return(
        <div className={classes.Burger} >
        <BurgerIngrediants type="bread-top"/>
        {transformIngrediants}
{/*         <BurgerIngrediants type="cheese"/>
        <BurgerIngrediants type="meat"/> */}
        <BurgerIngrediants type="bread-bottom"/>

        </div>
    );
}


export default Burger;