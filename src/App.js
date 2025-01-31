import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState();

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
    setAlert(null);
    },1500)

  }

  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success");
    document.title="TextUtils-Dark Mode";
  }
  else{
   setMode('light');
   document.body.style.backgroundColor='white';
   showAlert("Light mode has been enabled","success");
   document.title="TextUtils-Light Mode";
  }
}
  return (
<>
<Router>
<Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<br />
<div className="container">
<Switch>
          <Route exact path="/about">      //Use exact keyword to exact matching
            <About />
          </Route>
          <Route exact path="/">
              <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
          </Route>
        </Switch>

</div>
</Router>
</>
  );
}

export default App;
