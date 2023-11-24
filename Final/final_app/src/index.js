import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Header, Footer} from './script.js';
// init React :
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


// render something HTML :
root.render(<h1>Hellow World!</h1>);

// Create a function to return a portion of component:
function App() {
  const [activeView, setView ] = useState('Summary')

  return (
    <div>
      <Header setView= {setView} />
      <Footer />
    </div>
  );
}

function Greeting() {
    return <h1>This is a component.</h1>
    }
    // render something HTML :
    root.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>);