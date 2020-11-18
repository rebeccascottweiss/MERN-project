import React from 'react'; 
import Main from "./views/Main";
import AddChild from "./views/AddChild"; 
import Child from "./views/Child"; 
import './App.css';
import { Router } from "@reach/router"; 
import Donation from "./components/Donation"


function App() {
  return (
    <div className="App">
        <Router>
          <Main path="/" />
          <AddChild path="/child/new" />
          <Child path="/child/:id" />
          <Donation path = "/donate"/>
        </Router>
    </div>
  );
}

export default App;
