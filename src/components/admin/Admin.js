import React, { useState, useEffect } from "react";
import "./Admin.css";
import Login from "./Login";
import AdminManager from "./AdminManager";

import {firebaseApp} from "../../firebase";

function Admin() {

  const [login, setLogin] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
  firebaseApp.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    firebaseApp.auth().signOut();
  };

  const authListener = () => {
   firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setLogin(user);
      } else {
        setLogin("");
      }
    });
  };

  useEffect(() => {
    

    authListener();
  }, []);

  return (
    <div>
      {login ? (
        <AdminManager handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          setEmailError={setEmailError}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
        />
      )}
    </div>
  );
}

export default Admin;
