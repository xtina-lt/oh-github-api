import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const datalist = [
    {"name" : "hello world", 
    "language" : "foo",  
    "description" : "lorem ipsy lorem ipsy lorem ipsy lorem ipsy lorem ipsy lorem ipsy", 
    "url" : "https://github.com/xtina-lt/advant-calendar"},
    {"name" : "hello world", 
    "language" : "foo",  
    "description" : "lorem ipsy lorem ipsy lorem ipsy lorem ipsy lorem ipsy lorem ipsy", 
    "url" : "https://github.com/xtina-lt/advant-calendar"},
    {"name" : "hello world", 
    "language" : "foo",  
    "description" : "lorem ipsy lorem ipsy lorem ipsy lorem ipsy lorem ipsy lorem ipsy", 
    "url" : "https://github.com/xtina-lt/advant-calendar"},
    {"name" : "hello world", 
    "language" : "foo",  
    "description" : "lorem ipsy lorem ipsy lorem ipsy lorem ipsy lorem ipsy lorem ipsy", 
    "url" : "https://github.com/xtina-lt/advant-calendar"}
  ]


  return (
    <>
      <header>
        Github-Api
      </header>
      <nav>
        link | link | link
      </nav>

      <main>

      </main>
    </>
  );
}

export default App;
