import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state={
        showSideDrawer: false
    }
    sideDrawerCloseHandler =()=>{
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler =()=>{
        this.setState((prevState)=>{
            return{showSideDrawer: !prevState.showSideDrawer};        
        });
    }

    render(){
        return (
            <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer 
                Open={this.state.showSideDrawer}
                closed={this.sideDrawerCloseHandler} />
            <main className={classes.content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}

export default Layout