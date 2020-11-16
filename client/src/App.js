import React from 'react'; 
import Tree from "./components/Tree";
import AddChild from "./views/AddChild"; 
import './App.css';
import { Router } from "@reach/router"; 


function App() {
  return (
    <div className="App">
        <Router>
          <Tree path="/" />
          <AddChild path="/newChild" />
        </Router>
    </div>
  );
}

export default App;
