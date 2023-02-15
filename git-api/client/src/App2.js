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

    // useEffect(()=>{
    //   axios.get('https://api.github.com/users/xtina-lt/repos')
    //     .then( res => { console.log(res.data); setList(res.data)} )
    //     .catch( err => console.log(err) )

    // },[])

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
          datalist.map( (item, idx)=> (
            <div key={idx}>
              <h2>{item.name.replace('-', ' ')}</h2>
              <h3>
                Language:
              </h3> 
              {item.language}
              <h3 className='accent glow'>
                Description:
              </h3> 
              {item.description}
              <br/>
              <span className='accent'>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </span>

            </div>
          ))
        }
      </main>
    </>
  );
}

export default App;
