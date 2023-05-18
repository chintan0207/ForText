import React from 'react'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';


const MainApp = () => {

  const [mode, setMode] = useState('light');  //dark mode is enble or mot

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
 
  const toggleMode = () =>{
    if(mode==='light'){
      setMode ('dark')
      document.body.style.backgroundColor='#14204e'
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled", "success");
    }
  }

  const toggleMode2 = () =>{
    if(mode==='light'){
      setMode ('dark')
      document.body.style.backgroundColor='#271348'
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <div>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2}  />
    <Alert  alert={alert}/>
    <div className='container my-3'>
    <TextForm showAlert={showAlert} mode={mode}/>
    </div>
     
    </div>
  )
}

export default MainApp