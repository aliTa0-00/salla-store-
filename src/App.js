import "./App.css";
import "./Theme.css";
import Header from "./copm/Header";
import Footer from "./copm/Footer";
import MainContent from "./copm/MainContent";
import { Helmet } from "react-helmet";
import {useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/confing';


function App() {


  const [user, loading, error] = useAuthState(auth);
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Helmet>
        <title>الصفحة الرئيسية</title>
      </Helmet>
      <Header />
      {user && <MainContent contentPage={`🧡 welcome ${user.displayName} `} />}
      {!user && 
      <main>
        <h1>قم بتسجيل الدخول لعرض المحتوى</h1>
        </main>}
      <Footer />
    </div>
  );
}

export default App;
