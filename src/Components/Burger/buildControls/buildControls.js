import React from 'react';
import classes from './buildControls.css';
import BuildControl from './BuildControl/buildControl';

const controls =[
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Salad', type: 'salad'}
        
]

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        <p> Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map( ctrl=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingrediantAdded(ctrl.type)} 
            remove={() => props.ingrediantRemove(ctrl.type) }
            disabled={props.disabled[ctrl.type]}/>
        ))} 
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.purchased}
            >ORDER NOW
        </button>
    </div>

);

export default buildControls;