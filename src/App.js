import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/about";
import { BrowserRouter as Router  , Route, Routes } from 'react-router-dom'; 


function App() {
  const [mode , setMode] = useState ('light');
  const [alert, setAlert] = useState (null);

  const showAlert = (message , type) => {
      setAlert({
        msg : message,
        type : type
      }
      )

      setTimeout(() => {
        setAlert(null)
      }, 1500);
  

  }
  const toggelMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Drak Mode has been Enabled" , "warning");
      
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been Enabled" , "success");
  }

  
};
return (
  <>
    {/* <Router> */}
      <div>
        <Navbar title="TextUtils" mode={mode} toggelMode={toggelMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}

            {/* <Route exact path="/About" element = {<About /> }> */}
            {/* {<About />} */}
            {/* </Route> */}

            {/* <Route exact path="/" element = { <TextForm heading="Text to Analyze" showAlert={showAlert} />}> */}
            <TextForm heading="Text to Analyze" showAlert={showAlert} />
              {/* <TextForm heading="Text to Analyze" showAlert={showAlert} /> */}
            {/* </Route>
            
          </Routes> */}
        </div>
      </div>
    {/* </Router> */}
  </>
);
}



export default App;
