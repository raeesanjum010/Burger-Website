import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './Container/burgerBuilder/burgerBuilder';
import CheckOut from './Container/CheckOut/CheckOut';
import Orders from '../src/Container/Orders/Orders';

class App extends Component {

  render() {
    return (
      <div>
         <Layout>
            <Switch>
              <Route path ='/checkout' component={CheckOut}/>
              <Route path ='/orders' component={Orders}/>
              <Route path ='/' exact component={BurgerBuilder}/>
            </Switch>
         </Layout>
      </div>
    );
  }
}

export default App;