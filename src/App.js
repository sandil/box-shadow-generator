import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BoxShadow from "./components/BoxShadow";
import BorderRadius from "./components/BorderRadius";
import TextShadow from "./components/TextShadow";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Route exact path="/" component={BoxShadow}/>
        <Route path="/border-radius" component={BorderRadius}/>
        <Route path="/text-shadow" component={TextShadow}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
