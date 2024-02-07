import "./sign.css";
import Header from "../copm/Header";
import Footer from "../copm/Footer";
import { Link } from "react-router-dom";
import {useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { useState } from 'react';
import { app } from '../firebase/confing';

const SignUp = () => {
  const navigate = useNavigate();
  const {theme} = useContext(ThemeContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userName, setuserName] = useState("");

  return (
    <div className={`${theme}`}>
      <Header />

      <main>
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input   onChange={(eo) => {
                setuserName(eo.target.value);
              }} type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input onChange={(eo) => {
                setemail(eo.target.value)
              }} type="email" name="" required="" />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input onChange={(eo) => {
                setpassword(eo.target.value)
              }} type="password" name="" required="" />
              <label>Password</label>
            </div>
            <button onClick={(eo) => {
              eo.preventDefault()
              const auth = getAuth();
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;
                  console.log(user)

                  updateProfile(auth.currentUser, {
                    displayName: userName,
                  })
                    .then(() => {
                      // Profile updated!
                      // ...
                    })
                    .catch((error) => {
                      console.log(error);
                      // An error occurred
                      // ...
                    });

                  // ...
                  navigate("/")
                  // ...


                


                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode)
                  // ..
                });
            }} className="submit">
              Submit
            </button>
            <p className="haveAccount">you have an account? <Link>sign in</Link></p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignUp;
