import "./App.css";
import { useState } from "react";
import { UC, LC, NC, SC } from "./data/PassChar";

function App() {
  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbols,setSymbols]=useState(false)
  let[passwordlen,setPasswordlen] = useState()
  let [finalpassword,setFinalpassword] = useState('')

  let createpassword = () => {
    let finalpass=''
    let charset = ''
    if (uppercase || lowercase || number || symbols)
      {
         if(uppercase) charset += UC;
         if(lowercase) charset+=LC;
         if(number) charset+=NC;
         if(symbols) charset+=SC;
         
         for(let i = 0 ;i<passwordlen ;i++){
            finalpass+=charset.charAt( Math.floor(Math.random()*charset.length))
         }
          setFinalpassword(finalpass)
          //console.log(finalpass)


      }
    else 
      {
        alert("PLease select one option first")
      }
  }
  let copypass = () =>{
    navigator.clipboard.writeText(finalpassword)
  }


  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>

        <div className="passwordBoxin">
          <input type="text" readOnly value={finalpassword}/> <button onClick={copypass}>Copy</button>
        </div>

        <div className="passLength">
          <label>Password Length</label>
          <input type="number" value={passwordlen} max={20} min={10} onChange={(event)=>setPasswordlen(event.target.value)} max={20}/>
        </div>

        <div className="passLength">
          <label>Include Uppercase</label>
          <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
        </div>

        <div className="passLength">
          <label>Include Lowercase</label>
          <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
        </div>

        <div className="passLength">
          <label>Include Number</label>
          <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}/>
        </div>

        <div className="passLength">
          <label>Include symbols</label>
          <input type="checkbox" checked={symbols} onChange={()=>setSymbols(!symbols)}/>
        </div>

        <button className="btn" onClick={createpassword}>Generate Password</button>
      </div>
    </>
  );
}

export default App;
