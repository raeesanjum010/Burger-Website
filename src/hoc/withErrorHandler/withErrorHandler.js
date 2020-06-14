import React, {Component} from 'react';
import Aux from '../Aux';
import Model from '../../Components/UI/Model/Model'


const withErrorHandler = (WrappedComponents, axios) =>{
    return class extends Component{
        state = {
            error: null
        }
        componentWillMount(){
            this.reqInterceptors = axios.interceptors.request.use(req=> {
                this.setState({error: null})
                return req;
            });
            this.resInterceptors = axios.interceptors.response.use(res=>res, error=> {
                this.setState ({error: error})
            });
        }
        errorConfirmedHandler =() =>{
            this.setState({error: null});
        }
        componentWillUnmount(){
            console.log('conpoenent will unmointed', this.reqInterceptors, this.resInterceptors);
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }

        render(){
            return (
                <Aux>
                    <Model 
                        show={this.state.error}
                        modelClosed={this.errorConfirmedHandler}>
                        { this.state.error ? this.state.error.message : null }
                    </Model>
                    <WrappedComponents {...this.props}/>
                </Aux>
            );
        }
    } 
}

export default withErrorHandler;