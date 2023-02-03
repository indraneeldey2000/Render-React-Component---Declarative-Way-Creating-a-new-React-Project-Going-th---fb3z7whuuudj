import React, { Component, useState } from "react";
import '../styles/App.css';

function Comp() {
  return (
    <div id="root">
      <p>I am learning React. My life is getting better.</p>
    </div>
  )
}
const App = () => {
  return (
    <div id="main">
      <Comp />
    </div>
  )
}


export default App;
