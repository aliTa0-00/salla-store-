import React from "react";
import Header from "../copm/Header";
import Footer from "../copm/Footer";
import MainContent from "../copm/MainContent";
import { Helmet } from "react-helmet";
import {useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/confing';
import { useNavigate } from "react-router-dom";

const Maobil = () => {
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);
  const {theme} = useContext(ThemeContext);

  if (!user && !loading) {
    navigate("/")
  }

  if (user) {
    return (
      <div className={`${theme}`}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>الموبايلات</title>
        </Helmet>
        <Header />
        <MainContent contentPage="نفذت كمية الموبايلات التي نمتلكها" />
  
        <Footer />
      </div>
    );
  }
};

export default Maobil;
