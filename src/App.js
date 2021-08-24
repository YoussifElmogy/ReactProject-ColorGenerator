import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [error,setError]=useState(false);
  const [color,setColor]=useState('');
  const [list,setList]=useState( new Values('#f15025').all(10));
  
  const submitHandler=(e)=>{
    e.preventDefault();
    try {

      let colors = new Values(color).all(10);
      setList(colors);
      

      
    } catch (error) {
      setError(true);
      console.log(error)
      
    }

  }

  return <>

  <section className="container">
    <h3>color generator</h3>
    <form onSubmit={submitHandler}>
      <input className={`${error?'error':null}`} type="text" placeholder="#f15025" value={color} onChange={(e)=>setColor(e.target.value)} />
      <button type="submit" className="btn" > submit </button>
    </form>

  </section>

  <section className="colors">
    {
      list.map((color,index)=>{
        let hex=color.hex;
        return <SingleColor key={index} {...color} index={index} hex={hex} ></SingleColor>

      })
    }

  </section>
  
  </>
}

export default App
