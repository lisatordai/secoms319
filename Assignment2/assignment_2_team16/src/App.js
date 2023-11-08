
import './App.css';
import { Header, Footer, Content } from './script.js';

import React, { useState, useEffect } from 'react';


function App() {
  const [activeView, setView ] = useState('Summary')

  return (
    <div>
      <Header setView= {setView} />
      <Content page={activeView} setView={setView}/>
      <Footer />
    </div>
  );
}

export default App;
