import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

class SignIn extends Component {
    componentDidMount() {
       
    }

    render() {
        return (
            <Fragment>
                <h1>SIGN IN</h1>
                <button onClick>Auth with Facebook</button>

                <hr />

                <div>
                    <input type="text" placeholder="E-mail"/>
                    <input type="password" placeholder="password"/>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) =>({
    // homeData:(state.homeReducer && state.homeReducer.success) ? state.homeReducer.success : {}
});
export default connect(mapStateToProps)(SignIn);
