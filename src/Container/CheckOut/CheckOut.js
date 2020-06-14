import React, { Component } from 'react';
import CheckOutSummary from '../../Components/Order/checkOutSummary/checkOutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';

class CheckOut extends Component {
    state= {
        ingrediants: null,
        price: 0
    }

    componentWillMount(){
        const query =new URLSearchParams(this.props.location.search);
        const ingrediants = {};
        let price= 0;
        for (let param of query.entries()){
            if ( param[0] === 'price' ) {
                price = param[1];
            } else{
                ingrediants[param[0]] = + param[1];
            }

        }
        this.setState({ingrediants: ingrediants, totalPrice: price});
    }

    checkOutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkOutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return (
            <div>
                <CheckOutSummary 
                    ingrediants={this.state.ingrediants}
                    checkOutCancelled={this.checkOutCancelledHandler}
                    checkOutContinue={this.checkOutContinueHandler} />
                <Route path={this.props.match.path + '/contact-data'} 
                render={(props)=>(
                <ContactData 
                    ingrediants={this.state.ingrediants} 
                    price ={this.state.totalPrice} 
                    {...props}  />)} />
            </div>
        );
    }
}

export default CheckOut;