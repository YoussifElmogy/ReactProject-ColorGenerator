import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hex}) => {
  const[alert,setAlert]=useState(false);
  let cgb = rgb.join(',');
  let colorHex = `#${hex}`;

  const copyValue=(e)=>{
    e.preventDefault();
    setAlert(true);
    navigator.clipboard.writeText(colorHex);
  }
  useEffect(()=>{
  const timeout=  setTimeout(()=>{
      setAlert(false);
    },3000)
    return()=> clearTimeout(timeout);

  },[alert])

  return <article onClick={copyValue} className={`color ${index > 10 &&'color-light'}`} style={{backgroundColor:`rgb(${cgb})`}} >
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{colorHex}</p>
    {alert&& <p className="alert" >copied to clipboard</p>}


  </article>
}

export default SingleColor
