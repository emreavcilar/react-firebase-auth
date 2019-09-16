import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import * as firebase from "firebase/app";
import {
    FirebaseAuthConsumer,
    IfFirebaseAuthed,
    IfFirebaseAuthedAnd
} from '@react-firebase/auth'
class Home extends Component {
    signInWithGoogle() {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider);
    }
    signInAnonymously() {
        firebase.auth().signInAnonymously();
    }
    signOut() {
        firebase.auth().signOut();
    }
    render() {
        return (
            <Fragment>
                <section>
                    <button onClick={this.signInWithGoogle}>Sign In with Google</button>
                    <button onClick={this.signInAnonymously}>Sign In Anonymously</button>
                    <button onClick={this.signOut}>Sign Out</button>
                </section>

                <FirebaseAuthConsumer>
                    {({ isSignedIn, user, providerId }) => {
                        return (
                            <pre style={{ height: 300, overflow: "auto" }}>
                                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                            </pre>
                        );
                    }}
                </FirebaseAuthConsumer>

                <div>
                    <IfFirebaseAuthed>
                        {() => {
                            return <div>You are authenticated</div>;
                        }}
                    </IfFirebaseAuthed>
                    <IfFirebaseAuthedAnd
                        filter={({ providerId }) => providerId !== "anonymous"}
                    >
                        {({ providerId }) => {
                            return <div>You are authenticated with {providerId}</div>;
                        }}
                    </IfFirebaseAuthedAnd>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    // homeData:(state.homeReducer && state.homeReducer.success) ? state.homeReducer.success : {}
});
export default connect(mapStateToProps)(Home);
