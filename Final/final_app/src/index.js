import React from 'react';
import ReactDOM from 'react-dom/client';
// init React :
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


// render something HTML :
root.render(<h1>Hellow World!</h1>);

// Create a function to return a portion of component:
function Greeting() {
    return <h1>This is a component.</h1>
    }
    // render something HTML :
    root.render(Greeting());