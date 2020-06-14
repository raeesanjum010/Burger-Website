import React, { Component } from 'react';
import Order from '../../Components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    
    state = {
        Loading: true,
        orders: []
    }
    componentDidMount () {
        axios.get('orders.json')
        .then(res => {
            const fetchedOrders = [];
            for(let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({Loading: false, orders: fetchedOrders});
        })
        .catch(err => {
            this.setState({Loading: false});
        });
    }
    render() {
        return (
            <div>
                {this.state.orders.map(order =>(
                    <Order 
                        key={order.id}
                        ingrediants={order.ingrediants}
                        price={order.Price} />
                ))}
            </div>
        ); 
    }
}

export default withErrorHandler(Orders, axios);