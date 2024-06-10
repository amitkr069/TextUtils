
import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import './App.css';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// av bs github me deploy krne ke liye router wla sb hatayenge
// also about wla page v hta denge

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not and ye wla av navbar me use kiye hai
  const [text, textMode] = useState('dark'); // to change text of "enable dark/light mode"
  const [alert, setAlert] = useState(null); // initially null hai.

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000); // 2 second ke baad apne aap alert wla htt jayega
  }
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      textMode('light');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode"; // to change tile dynamically 
      // setInterval(() => {
      //   document.title = "TextUtils is amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);  //to blink the title just like the virus notification
      
    }
    else{
      setMode('light');
      textMode('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title = "TextUtiils" aboutText = "About" mode = {mode} toggleMode = {toggleMode} text = {text}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <Routes> */}
          {/* its always a good idea to write "exact path" as react partial matching krta hai */}
          {/* <Route exact path="/about"  */}
            {/* element={<About/>}/> */}
          {/* <Route path="/users">
            <Users />
          </Route> */}
          {/* <Route path="/">
            <Home />
          </Route> */}
          {/* <Route exact path = "/" */}
            {/* element = {<TextForm heading = "Enter the text to analyse" mode={mode} showAlert={showAlert}/>}/> */}
    {/* </Routes> */}
    <TextForm heading = "Enter the text to analyse" mode={mode} showAlert={showAlert}/>
    {/*<About/>*/}
    </div>
    {/* </Router> */}
    
    </>
  );
}

export default App;
