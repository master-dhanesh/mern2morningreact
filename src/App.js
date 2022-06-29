import React, { useEffect, useState } from "react";
import app from "./firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

const App = () => {
    const [loggedin, setLoggedin] = useState(false);
    const auth = getAuth(app);

    useEffect(() => {
        restoresession();
        if (!loggedin) console.log("User Unauthenticated");
        else console.log("User Authenticated");
    }, [loggedin]);

    const restoresession = async () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedin(true);
            }
        });
    };

    const signup = async () => {
        try {
            const userinfo = await createUserWithEmailAndPassword(
                auth,
                "dhanesh@gmail.com",
                "1234567890"
            );
            setLoggedin(true);
            console.log(userinfo);
        } catch (error) {
            console.log(error);
        }
    };

    const signin = async () => {
        try {
            const userinfo = await signInWithEmailAndPassword(
                auth,
                "dhanesh@gmail.com",
                "1234567890"
            );
            setLoggedin(true);
            console.log(userinfo);
        } catch (error) {
            console.log(error.message);
        }
    };

    const signout = async () => {
        await signOut(auth);
    };

    return (
        <div className="container alert mt-5 ">
            <button onClick={signup} className="btn btn-primary me-5">
                Signup
            </button>
            <button onClick={signin} className="btn btn-primary me-5">
                Signin
            </button>
            <button onClick={signout} className="btn btn-primary me-5">
                Signout
            </button>
        </div>
    );
};

export default App;
