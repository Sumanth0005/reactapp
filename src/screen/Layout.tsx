import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout() {
 // State variable to store the selected application name
 const [appName, setAppName] = useState("");

 // Function to receive data from the child component (Header)
 const getAppName = (value: string) => {
   setAppName(value); // Update the state with the received value
 };
 


  return (
    <Router>
    <div className="layout-container">
      <Header sendData={getAppName} />
      <div className="container-fluid">
        <Sidebar appName={appName}/>
        <Maincontainer />
      </div>
    </div>
    </Router>
  );
}
