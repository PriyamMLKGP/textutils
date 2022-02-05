import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState} from 'react';
import Alerts from './components/Alerts';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
function App() {
  //initializing state variables
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
   //setting alert as an object 
    setAlert({
      msg:message,
      type: type
    })
    //after 1 second alert will be set to null
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  //this function is teh main for changing the modes from dark to light
  const toggleMode=()=>{
    if(mode==='dark'){
    setMode('light');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    //we set the variables to be shown on alert 
    showAlert("Light Mode On","success")
  }
    else{
        setMode('dark');
        document.body.style.backgroundColor='#000019';
        document.body.style.color='white';
        showAlert("Dark Mode On","success")
    }
    }
  return (
    <>
    {/* router is used to choose between components */}
    <Router>
    <Navbar title="TextUtils" abouttext="About us" mode={mode} toggle={toggleMode}/>
    {/* here container manages the text area by limiting it 
    And my-3 adds margin of unit 3 */}
    {/* Alert is being passed with values or pops */}
    <Alerts alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Manipulate It" mode={mode} showalert={showAlert}/>
          </Route>
    </Switch>  
    
    </div>
    <Footer mode={mode}/>
    </Router>
    </>
  );
}

export default App;
