import React from 'react';
import classes from './Order.css';

const Order = (props) => {

    const ingrediants =[];
    for(let ingrediantsName in props.ingrediants){
        ingrediants.push(
            {
                name: ingrediantsName,
                amount: props.ingrediants[ingrediantsName]
            }
        );
    }

    const ingrediantsOutput = ingrediants.map(ig =>{
        return <span 
            style= {{
                textTransform: 'capitalize',
                padding: '5px',
                margin: '0 8px',
                border: '1px solid #ccc',
                display: 'inline-block'
            }}
            key={ig.name}> {ig.name} ({ig.amount}) </span>
    });

    return (
        <div className={classes.Order}>
            <p>Ingrediants: {ingrediantsOutput} </p>
            <p>Price: <strong>US {Number.parseFloat(props.price).toFixed(2)} </strong></p>
        </div>
    )
};

export default Order;