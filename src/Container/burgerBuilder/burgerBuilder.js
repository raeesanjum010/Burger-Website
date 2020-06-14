import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/buildControls/buildControls';
import Model from '../../Components/UI/Model/Model';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';



const INGREDIANT_PRICES ={
    cheese: 0.5,
    bacon: 0.4,
    salad: 0.7,
    meat: 0.9
};

class burgerBuilder extends Component{
    
        state = {
            ingrediants: null,
            totalPrice: 4,
            purchasable: false,
            purchasing: false,
            Loading: false,
            error: false
        }
    componentDidMount (){
      
        axios.get('https://burger-react-app-2faba.firebaseio.com/ingrediants.json')
        .then(response =>{
            this.setState({ingrediants: response.data});
        })
        .catch(error => {
            this.setState({ error: true });
        });
    }    
    updatePurchaseState (ingrediants){
        const sum = Object.keys(ingrediants).map(ingKey => {
            return ingrediants[ingKey];
        })
        .reduce( (sum, el ) => {
            return sum + el;
        },0);
        this.setState({purchasable: sum > 0});
    }

    addIngrediantHandler = (type) => {
        const oldCount = this.state.ingrediants[type];
        const updateCount = oldCount + 1;
        const updateIngrediant = {
            ...this.state.ingrediants
        };
        updateIngrediant[type]=updateCount;
        const priceAddition = INGREDIANT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice= oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingrediants: updateIngrediant});
        this.updatePurchaseState(updateIngrediant);
    }
    removeIngrediantHAndler = (type) => {
        const oldCount = this.state.ingrediants[type];
        if (oldCount <=0)
        {
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngrediant = {
            ...this.state.ingrediants
        };
        updateIngrediant[type]=updateCount;
        const priceDeduction = INGREDIANT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice= oldPrice - priceDeduction ;
        this.setState({totalPrice: newPrice, ingrediants: updateIngrediant});
        this.updatePurchaseState(updateIngrediant);
    }
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = () => {
        // alert("please Continue!!")
        
        const queryParams = [];
        for(let i in this.state.ingrediants){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingrediants[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }
  
    render (){
        const disabledInfo ={
            ...this.state.ingrediants
        };
        for (let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <=0
        }
        let orderSummary= null;
       
         let burger = this.state.error ? <p> There are something wrong! </p> : <Spinner/>;
       
         if(this.state.ingrediants) {
            burger =( 
                <Aux>    
                    <Burger ingrediants = {this.state.ingrediants}/>
                    <BuildControls  
                    ingrediantAdded={this.addIngrediantHandler}
                    ingrediantRemove={this.removeIngrediantHAndler} 
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    purchased= {this.purchaseHandler}
                    price={this.state.totalPrice}/>
                </Aux>
            );
            orderSummary =  <OrderSummary  
                        price = {this.state.totalPrice}
                        ingrediants={this.state.ingrediants}
                        purchaseCancel={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}/>;
        
        }
        if (this.state.Loading) {
            orderSummary = <Spinner/>
        }
        
        return (
            <Aux>
               { <Model show={this.state.purchasing} modelClosed={this.purchaseCancelHandler} >
                    {orderSummary}       
                </Model>}
                {burger}
            </Aux>
        );  
    }
}

export default withErrorHandler(burgerBuilder, axios);