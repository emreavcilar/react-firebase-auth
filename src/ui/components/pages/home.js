import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

class Home extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <Fragment>
                <h1>HOME PAGE</h1>
                <p>User authenticated with Facebook </p>
                <p>Username is </p>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) =>({
    // homeData:(state.homeReducer && state.homeReducer.success) ? state.homeReducer.success : {}
});
export default connect(mapStateToProps)(Home);
