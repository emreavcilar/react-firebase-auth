import React, {Component, Suspense} from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import Home from "../pages/home";
import SignIn from '../pages/signin';

class RoutesComponent extends Component {
    constructor(props){
        super();
        this.state={
            isLoggedIn:false
        //   path: this.props.path,
        //   firebaseRef: firebase.database().ref(this.props.path);
        }
      }
    componentDidUpdate(){
        
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('nextprops ' , nextProps)
        console.log('prevState ' , prevState)
    //     if(nextProps.someValue!==prevState.someValue){
    //       return { someState: nextProps.someValue};
    //    }
    //    else return null;

    return null
     }

    render() {
        return (
            <section>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/sign-in" component={SignIn} />
                </Switch>

            </section>
        );
    }
}

export default RoutesComponent;
