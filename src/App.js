import React from "react";
import "./App.css";
import Stopwatch from "./component/Stopwatch";

function App() {
  return (
    <div className="stopwatch">
      <h1 className="title">Stop Watch</h1>
      <Stopwatch />
    </div>
  );
}

export default App;
