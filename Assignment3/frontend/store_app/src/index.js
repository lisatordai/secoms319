//import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Header, Footer, Content } from './script.js';
// init React :
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


// render something HTML :
root.render(<h1>Hellow World!</h1>);

// Create a function to return a portion of component:
function App() {
  const [activeView, setView] = useState('page1')

  return (
    <div>

      <Content page={activeView} setView={setView} />

    </div>
  );
}

function Greeting() {
  return <h1>This is a component.</h1>
}
// render something HTML :
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>);