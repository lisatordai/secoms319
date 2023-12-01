// var express = require("express");
// var cors = require("cors");
// var app = express();
// var fs = require("fs");
// var bodyParser = require("body-parser");
// app.use(cors());
// app.use(bodyParser.json());
// const port = "8081";
// const host = "localhost";

// app.listen(port, () => {
//     console.log("App listening at http://%s:%s", host, port);
// });

import React, { useState } from 'react';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
// import About from './components/About';

function App() {
    const [currentView, setCurrentView] = useState('home');
    const [userName, setUserName] = useState('');

  const handleHomeToManagers = (name) => {
    setUserName(name);
    setCurrentView('main');
  };

//   const handleMainToSubView = () => {
//     setCurrentView('sub');
//   };

//   const handleSubViewToMain = () => {
//     setCurrentView('main');
//   };

//   const handleLogout = () => {
//     setCurrentView('login');
//   };

//   const navToAbout = () => {
//     setCurrentView('about');
//   }

    return (
        <div>
      {currentView === 'login' && <Login onLoginSuccess={handleLoginSuccess} />}
      {currentView === 'main' && (
        <MainView
        userName = {userName}
          onMainToSubView={handleMainToSubView}
          onLogout={handleLogout}
          onAbout = {navToAbout}
        />
      )}
      {currentView === 'sub' && (
        <SubView
        userName = {userName}
          onSubViewToMain={handleSubViewToMain}
          onLogout={handleLogout}
          onAbout = {navToAbout}
        />
      )}
      {
        currentView === 'about' && (
          <About
          userName = {userName}
            onSubViewToMain={handleSubViewToMain}
            onLogout={handleLogout}
          />
        )}
      
    </div>
    );
}

export default App;