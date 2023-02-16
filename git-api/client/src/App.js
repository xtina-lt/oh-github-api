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

  const [list, setList] = useState([])

  useEffect(()=>{
    //                                     /YOUR USERNAME/
    axios.get('https://api.github.com/users/xtina-lt/repos')
      .then(res => {console.log(res); setList(res.data)})
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <header>
        Github-Api
      </header>
      <nav>
        link | link | link
      </nav>

      <main>
        {
          list.map( (item, idx) => (
            <div key={idx}>
              <h1>
                {item.name}
              </h1>
              {item.language}
              <br/>
              {item.description}
              <br/>
              <a href={item.clone_url} target="_blank" rel="noreferrer">Link</a>
            </div>
          ))
        }
      </main>
    </>
  );
}

export default App;
