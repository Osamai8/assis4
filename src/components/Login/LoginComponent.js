import React, { useEffect, } from 'react';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { useAuth } from '../../Auth-Content';
import { Redirect } from 'react-router-dom';

firebase.initializeApp({
    apiKey: "AIzaSyC_dpp33fW0GBMyuvBGc0Udqk4MLgtOZJo",
    authDomain: "wizard-base-e81c6.firebaseapp.com"
})

const LoginComponent = () => {
    const { isSignedIn, setIsSignedIn, setOpenForm } = useAuth();
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }


    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        })
    })
    if (isSignedIn === true) {
        setOpenForm(false);
    }

    return (
        <div className="App">
            {isSignedIn ? (
                <div>
                    <Redirect to='/basket' />
                    {/* <span>
                        <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                        <h4>Hello {firebase.auth().currentUser.displayName}</h4>
                    </span> */}
                </div>
            ) : (
                <div style={{ margin: '2rem' }}>
                    <h3>You must SignIn to see your basket</h3>
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                </div>
            )}
        </div>
    )
}
export default LoginComponent;
