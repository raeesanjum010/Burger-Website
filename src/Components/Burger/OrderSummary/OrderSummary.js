import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

    componentWillUpdate(){
        console.log('[OrderSummery] will update')
    }

    render(){
        
     const ingrediantSummery = Object.keys(this.props.ingrediants).map(ingKey =>{
        return (
            <li key={ingKey}>
                <span style={{textTransform: 'capitalize'}}> 
                {ingKey}
                </span>:{this.props.ingrediants[ingKey]}
            </li>
        );
    });
        return(
            <Aux>
                <h3> Your Order </h3>
                <p>A burger with following ingrediants:</p>
                <ul>
                    {ingrediantSummery}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
               <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary; 