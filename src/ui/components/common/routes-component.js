import React, { Component } from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import Home from "../pages/home";

class RoutesComponent extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <section>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>

            </section>
        );
    }
}

export default RoutesComponent;
